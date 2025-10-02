import { Routes } from "@angular/router";

const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component'),
    children: [
      {
        path: 'register',
        title: 'Registro',
        loadComponent: () => import('./pages/register/register.component')
      },
      {
        path: 'login',
        title: 'Inicio de sesión',
        loadComponent: () => import('./pages/login/login.component')
      },
      {
        path: 'edit/:userId',
        title: 'Editar perfil',
        loadComponent: () => import('./pages/edit/edit.component')
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ],
  }
];

export default authRoutes;