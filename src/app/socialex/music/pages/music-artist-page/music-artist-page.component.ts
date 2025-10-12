// Angular
import { NgOptimizedImage, SlicePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatMillisecondsPipe } from '@socialex/music/pipes/format-milliseconds.pipe';
import { FormatNumberPipe } from '@socialex/music/pipes/format-number.pipe';

// Services
import { MusicService } from '@socialex/music/services/music.service';

@Component({
  selector: 'music-artist-page',
  imports: [SlicePipe, FormatMillisecondsPipe, NgOptimizedImage, FormatNumberPipe],
  templateUrl: './music-artist-page.component.html',
})
export default class MusicArtistPageComponent {
  musicService = inject(MusicService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParamId = toSignal(this.activatedRoute.paramMap, { initialValue: null });

  artistResource = rxResource({
    params: () => {
      const id = this.queryParamId()?.get('id');
      if (!id) return;
      return { id };
    },
    stream: ({ params }) => this.musicService.getSpotifyArtistFull(params.id),
  });

  goBack() {
    this.router.navigate(['/socialex/music']);
  }
}