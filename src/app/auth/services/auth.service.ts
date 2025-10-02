// Angular 20
import { computed, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { authUsers } from '@auth/data/authUsers.data';

// Interfaces
import { AuthUser } from '@auth/interfaces/auth.interface';
import { Observable, of } from 'rxjs';

// Utils
import { convertFileToBase64 } from '@socialex/utils/convert-image-base64';

// Environment
import { environment } from 'src/environments/environment';

const { storageSessionKey } = environment;
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<AuthUser | null>(null);

  authUsers = authUsers;

  // Se ejecuta cuando se inyecta el servicio
  checkStatusResource = rxResource({
    stream: () => this.checkAuthStatus(),
  });

  checkAuthStatus(): Observable<boolean> {
    const raw = sessionStorage.getItem(storageSessionKey);
    if (!raw) {
      this.logout();
      return of(false);
    }
    const user = JSON.parse(raw) as AuthUser;
    this._user.set(user);
    this._authStatus.set('authenticated');
    return of(true);
  }

  authStatus = computed(() => {
    if (this._authStatus() === 'checking') return 'checking';
    if (this._user()) return 'authenticated';
    return 'not-authenticated';
  });

  user = computed(() => this._user());

  async login(email: string, password: string) {
    const authUser = authUsers.find(user => user.email === email && user.password === password);
    if (!authUser) return this.handleAuthError();
    authUser.status = 'online';
    return this.handleAuthSuccess(authUser);
  }
  
  getUser(): AuthUser | null {
    const user = sessionStorage.getItem(storageSessionKey);
    const parsedUser = user ? (JSON.parse(user) as AuthUser) : null;
    return user ? (JSON.parse(user) as AuthUser) : null;
  }
  
  logout() {
    const currentUser = this.getUser();
    if (currentUser) currentUser.status = 'offline';
    sessionStorage.removeItem(storageSessionKey);
    this._user.set(null);
    this._authStatus.set('not-authenticated');
  }

  async register(user: Omit<AuthUser, 'id' | 'avatar' | 'status'>, photoFile?: File) {
    const isUserExist = this.authUsers.find((u) => u.email === user.email);
    if (isUserExist) return this.handleAuthError();

    let imgBase64: string | undefined;

    if (photoFile) imgBase64 = await convertFileToBase64(photoFile);

    const newUser: AuthUser = {
      id: Date.now(),
      avatar: imgBase64 || 'https://static.wikia.nocookie.net/ef627b8d-fb7d-41eb-ad89-7e85af70ef68/scale-to-width/370',
      status: 'online',
      ...user,
    };

    this.authUsers.push(newUser);
    this._user.set(newUser);
    newUser.status = 'online';
    return this.handleAuthSuccess(newUser);
  }

  private handleAuthSuccess(user: AuthUser) {
    this._user.set(user);
    this._authStatus.set('authenticated');

    // Guardar token
    sessionStorage.setItem(storageSessionKey, JSON.stringify(user));
    return true;
  }

  private handleAuthError() {
    this.logout();
    return false;
  }
}
