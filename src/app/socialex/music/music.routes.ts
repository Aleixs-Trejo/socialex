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
  }
];

export default musicRoutes;