import { Routes } from "@angular/router";

const musicRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/music-page/music-page.component'),
    title: 'Música',
  },
  {
    path: ':type/:id',
    loadComponent: () => import('./pages/music-detail-page/music-detail-page.component'),
    title: 'Música'
  }
];

export default musicRoutes;