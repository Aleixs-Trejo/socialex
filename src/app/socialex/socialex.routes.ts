// Angular
import { Routes } from "@angular/router";

// Guards
import { AuthenticatedGuard } from "@auth/guards/authenticated.guard";
import { NotAuthenticatedGuard } from "@auth/guards/not-authenticated.guard";

const socialexRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/social-layout/social-layout.component'),
    children: [
      {
        path: 'home',
        title: 'Inicio',
        loadComponent: () => import('./pages/home-page/home-page.component')
      },
      {
        path: 'my-profile',
        title: 'Mi Perfil',
        loadComponent: () => import('./pages/profile-page/profile-page.component'),
        canMatch: [AuthenticatedGuard]
      },
      {
        path: 'profile/:userId',
        title: 'Perfil de usuario',
        loadComponent: () => import('./pages/profile-user-page/profile-user-page.component'),
        canMatch: [AuthenticatedGuard]
      },
      {
        path: 'edit-profile',
        title: 'Editar Perfil',
        loadComponent: () => import('./pages/edit-profile-page/edit-profile-page.component'),
        canMatch: [AuthenticatedGuard]
      },
      {
        path: 'post/:postId',
        title: 'Publicación',
        loadComponent: () => import('./pages/post-page/post-page.component')
      },
      {
        path: 'news',
        title: 'Noticias',
        loadComponent: () => import('./news/pages/news-page/news-page.component')
      },
      {
        path: 'music',
        title: 'Música',
        loadChildren: () => import('./music/music.routes'),
        // canMatch: [AuthenticatedGuard]
      },
      {
        path: 'watch',
        title: 'Películas, series y más',
        loadComponent: () => import('./streaming/pages/streaming-page/streaming-page.component')
      },
      {
        path: 'games',
        title: 'Juegos',
        loadComponent: () => import('./games/pages/games-page/games-page.component')
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ],
  }
];

export default socialexRoutes;