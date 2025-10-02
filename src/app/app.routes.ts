import { Routes } from '@angular/router';
import { NotAuthenticatedGuard } from '@auth/guards/not-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/splash-page/splash-page.component')
  },
  {
    path: 'socialex',
    loadChildren: () => import('./socialex/socialex.routes')
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    canMatch: [NotAuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: '',
  }
];