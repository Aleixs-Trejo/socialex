import { Routes } from "@angular/router";

const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component')
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component')
      },
      {
        path: 'edit/:userId',
        loadComponent: () => import('./pages/edit/edit.component')
      }
    ],
  }
];

export default authRoutes;