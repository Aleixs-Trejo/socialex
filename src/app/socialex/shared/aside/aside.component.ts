// Angular
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Services
import { AsideService } from '../services/aside.service';
import { AuthService } from '@auth/services/auth.service';

const asideList = [
  { title: 'Noticias', icon: 'assets/icon/icon-news-white.svg', route: '/socialex/news' },
  { title: 'Música', icon: 'assets/icon/icon-music-white.svg', route: '/socialex/music' },
  { title: 'Multimedia', icon: 'assets/icon/icon-video-white.svg', route: '/socialex/watch' },
  { title: 'Juegos', icon: 'assets/icon/icon-games-white.svg', route: '/socialex/games' },
];

@Component({
  selector: 'app-aside',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
})
export class AsideComponent {
  authService = inject(AuthService);
  asideService = inject(AsideService);
  asideList = asideList;
}