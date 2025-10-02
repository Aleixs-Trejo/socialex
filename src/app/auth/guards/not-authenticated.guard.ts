import { inject } from '@angular/core';
import { type CanMatchFn, Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

export const NotAuthenticatedGuard: CanMatchFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authStatus() === 'authenticated') {
    router.navigateByUrl('/socialex/home');
    return false;
  }
  return true;
};