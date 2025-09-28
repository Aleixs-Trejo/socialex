import { Routes } from '@angular/router';

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
    path: '**',
    redirectTo: '',
  }
];