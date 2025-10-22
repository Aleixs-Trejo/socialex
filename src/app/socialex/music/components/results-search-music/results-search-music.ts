// Angular
import { Component, inject, input } from '@angular/core';
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

// Services
import { MusicService } from '@socialex/music/services/music.service';

// RxJS
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

// Components
import { ResourceErrorComponent } from "@components/resource-error/resource-error.component";
import { FormatMillisecondsPipe } from '@socialex/music/pipes/format-milliseconds.pipe';

@Component({
  selector: 'results-search-music',
  imports: [RouterLink, ResourceErrorComponent, NgOptimizedImage, FormatMillisecondsPipe],
  templateUrl: './results-search-music.html',
})
export class ResultsSearchMusic {
  musicService = inject(MusicService);

  query = input<string>();

  queryObservable = toObservable(this.query);

  searchMusicResource = rxResource({
    stream: () => 
      this.queryObservable.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((q) => q!.trim().length > 1),
        switchMap(q => this.musicService.searchSpotify(q!))
      )
  });
}
