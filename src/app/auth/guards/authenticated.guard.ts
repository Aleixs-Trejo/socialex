import { inject } from '@angular/core';
import { Router, type CanMatchFn } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

export const AuthenticatedGuard: CanMatchFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authStatus() === 'not-authenticated') {
    router.navigateByUrl('/auth/login');
    return false;
  }
  return true;
};