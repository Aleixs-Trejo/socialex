import { Routes } from "@angular/router";
import { NotAuthenticatedGuard } from "./guards/not-authenticated.guard";

const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component'),
    children: [
      {
        path: 'register',
        title: 'Registro',
        loadComponent: () => import('./pages/register/register.component'),
      },
      {
        path: 'login',
        title: 'Inicio de sesión',
        loadComponent: () => import('./pages/login/login.component'),
      }
    ],
  },
];

export default authRoutes;