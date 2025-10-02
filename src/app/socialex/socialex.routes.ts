// Angular
import { Routes } from "@angular/router";

// Guards
import { AuthenticatedGuard } from "@auth/guards/authenticated.guard";

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
        path: 'my-reactions',
        title: 'Mis Reacciones',
        loadComponent: () => import('./pages/reactions-page/reactions-page.component'),
        canMatch: [AuthenticatedGuard]
      },
      {
        path: 'comments',
        title: 'Mis Comentarios',
        loadComponent: () => import('./pages/comments-page/comments-page.component'),
        canMatch: [AuthenticatedGuard]
      },
      {
        path: 'profile/:userId',
        title: 'Perfil de usuario',
        loadComponent: () => import('./pages/profile-user-page/profile-user-page.component'),
        canMatch: [AuthenticatedGuard]
      },
      {
        path: 'post/:postId',
        title: 'Publicación de usuario',
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
        loadComponent: () => import('./music/pages/music-page/music-page.component')
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