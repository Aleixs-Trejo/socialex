import { Routes } from "@angular/router";

const musicRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/music-page/music-page.component'),
    title: 'Música',
  },
  {
    path: 'artist/:id',
    loadComponent: () => import('./pages/music-artist-page/music-artist-page.component'),
    title: 'Artista'
  },
  {
    path: 'album/:id',
    loadComponent: () => import('./pages/music-album-page/music-album-page.component'),
    title: 'Álbum'
  }
];

export default musicRoutes;