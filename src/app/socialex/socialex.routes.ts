import { Routes } from "@angular/router";

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
        title: 'Perfil',
        loadComponent: () => import('./pages/profile-page/profile-page.component')
      },
      {
        path: 'my-reactions',
        title: 'Reacciones',
        loadComponent: () => import('./pages/reactions-page/reactions-page.component')
      },
      {
        path: 'news',
        title: 'Noticias',
        loadComponent: () => import('./news/pages/news-page/news-page.component')
      },
      {
        path: 'profile/:userId',
        title: 'Perfil de usuario',
        loadComponent: () => import('./pages/profile-user-page/profile-user-page.component')
      },
      {
        path: 'post/:postId',
        title: 'Publicación de usuario',
        loadComponent: () => import('./pages/post-page/post-page.component')
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ],
  }
];

export default socialexRoutes;