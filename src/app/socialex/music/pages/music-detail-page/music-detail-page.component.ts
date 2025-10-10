// Angular
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { MusicService } from '@socialex/music/services/music.service';

// RxJS
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'music-detail-page',
  imports: [],
  templateUrl: './music-detail-page.component.html',
})
export default class MusicDetailPageComponent {
  route = inject(ActivatedRoute);
  musicService = inject(MusicService);

  pageDetailsMusic = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      const type = this.route.snapshot.queryParamMap.get('type');
      if (!id || !type) return of(null);
      const uri = `spotify:${type}:${id}`;
      console.log('→ Solicitando página con URI:', uri);
      return this.musicService.getSpotifyPage(uri);
    })
  )
}