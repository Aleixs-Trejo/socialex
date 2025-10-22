// Angular
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

// Components
import { SectionComponentComponent } from "@socialex/shared/section-component/section-component.component";
import { MusicArtistsComponent } from "@socialex/music/components/music-artist/music-artist.component";
import { MusicSearchInput } from '@socialex/music/components/music-search-input/music-search-input';
import { AuthService } from '@auth/services/auth.service';


@Component({
  selector: 'app-music-page',
  imports: [SectionComponentComponent, RouterLink, MusicArtistsComponent, MusicSearchInput],
  templateUrl: './music-page.component.html',
})
export default class MusicPageComponent {
  authService = inject(AuthService);
  currentUser = this.authService.getCurrentUser();
}