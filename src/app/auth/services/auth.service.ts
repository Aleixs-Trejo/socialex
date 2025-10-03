// Angular 20
import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

// Interfaces
import { AuthUser } from '@auth/interfaces/auth.interface';
import { Observable, of } from 'rxjs';

// Utils
import { convertFileToBase64 } from '@socialex/utils/convert-image-base64';

// Environment
import { environment } from 'src/environments/environment';

const { storageSessionKey, storageUsersKey } = environment;
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<AuthUser | null>(null);

  constructor() {
    this.checkAuthStatus();
  }

  authStatus = computed(() => {
    if (this._authStatus() === 'checking') return 'checking';
    if (this._user()) return 'authenticated';
    return 'not-authenticated';
  });

  user = computed(() => this._user());

  // Recuperar usuarios del localStorage
  getAllUsersFromLocalStorage(): AuthUser[] {
    const raw = localStorage.getItem(storageUsersKey);
    return raw ? JSON.parse(raw) as AuthUser[] : [];
  }

  // Guardar usuarios en localStorage
  saveUsersToLocalStorage(users: AuthUser[]) {
    localStorage.setItem(storageUsersKey, JSON.stringify(users));
  }

  checkAuthStatus(): void {
    const raw = sessionStorage.getItem(storageSessionKey);
    if (!raw) {
      this._authStatus.set('not-authenticated');
      this._user.set(null);
      return;
    }

    const user = JSON.parse(raw) as AuthUser;
    this._user.set(user);
    this._authStatus.set('authenticated');
  }

  async login(email: string, password: string) {
    const usersFromLocalStorage = this.getAllUsersFromLocalStorage();
    const userFound = usersFromLocalStorage.find((u) => u.email === email && u.password === password);
    if (!userFound) return this.handleAuthError();
    return this.handleAuthSuccess(userFound);
  }

  getCurrentUser() {
    const user = sessionStorage.getItem('auth_user');
    return user ? JSON.parse(user) as AuthUser : null;
  }

  logout() {
    const currentUser = this._user();
    if (currentUser) currentUser.status = 'offline';

    sessionStorage.removeItem(storageSessionKey);
    this._user.set(null);
    this._authStatus.set('not-authenticated');
    this.router.navigateByUrl('/');
  }

  async register(user: Omit<AuthUser, 'id' | 'avatar' | 'status'>, photoFile?: File) {
    const usersFromLocalStorage = this.getAllUsersFromLocalStorage();

    const isUserExist = usersFromLocalStorage.some((u) => u.email === user.email);
    if (isUserExist) return this.handleAuthError();

    let imgBase64: string | undefined;

    if (photoFile) imgBase64 = await convertFileToBase64(photoFile);

    const newUser: AuthUser = {
      id: Date.now(),
      avatar: imgBase64 || 'https://static.wikia.nocookie.net/ef627b8d-fb7d-41eb-ad89-7e85af70ef68/scale-to-width/370',
      status: 'offline',
      ...user,
    };

    usersFromLocalStorage.push(newUser);
    this.saveUsersToLocalStorage(usersFromLocalStorage);
    return this.handleAuthSuccess(newUser);
  }

  private handleAuthSuccess(user: AuthUser) {
    sessionStorage.setItem(storageSessionKey, JSON.stringify(user));
    user.status = 'online';
    const authUsers = this.getAllUsersFromLocalStorage();
    const idx = authUsers.findIndex((u) => u.id === user.id);
    if (idx !== -1) {
      authUsers[idx] = user;
      this.saveUsersToLocalStorage(authUsers);
    }
    this._user.set(user);
    this._authStatus.set('authenticated');
    return true;
  }

  private handleAuthError() {
    this._user.set(null);
    this._authStatus.set('not-authenticated');
    return false;
  }
}
