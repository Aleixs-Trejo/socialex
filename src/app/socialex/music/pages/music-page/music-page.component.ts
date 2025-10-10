// Angular
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MusicExploreComponent } from '@socialex/music/components/music-explore/music-explore.component';

// Components
import { SectionComponentComponent } from "@socialex/shared/section-component/section-component.component";
import { MusicArtistComponent } from "@socialex/music/components/music-artist/music-artist.component";


@Component({
  selector: 'app-music-page',
  imports: [SectionComponentComponent, MusicExploreComponent, RouterLink, MusicArtistComponent],
  templateUrl: './music-page.component.html',
})
export default class MusicPageComponent {
}