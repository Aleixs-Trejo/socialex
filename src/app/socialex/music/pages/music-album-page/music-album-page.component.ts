// Angular
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { AfterViewChecked, Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { MusicService } from '@socialex/music/services/music.service';

// Mapper
import { SpotifyMapper } from '@socialex/music/mapper/music.mapper';

// Interfaces
import { Latest } from '@socialex/music/interfaces/spotify-artist.interface';

// Pipes
import { FormatMillisecondsPipe } from '@socialex/music/pipes/format-milliseconds.pipe';

// Components
import { LoaderComponent } from "@components/loader/loader.component";
import { ResourceErrorComponent } from "@components/resource-error/resource-error.component";
import { DiscographyCardComponent } from "@socialex/music/components/discography-card/discography-card.component";

// Swiper
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { UiStateService } from '@socialex/shared/services/ui-state.service';

@Component({
  selector: 'music-album-page',
  imports: [RouterLink, NgOptimizedImage, LoaderComponent, ResourceErrorComponent, FormatMillisecondsPipe, DatePipe, DiscographyCardComponent],
  templateUrl: './music-album-page.component.html',
})
export default class MusicAlbumPageComponent implements AfterViewChecked {
  musicService = inject(MusicService);
  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);
  uiService = inject(UiStateService);

  queryParamId = toSignal(this.activatedRoute.paramMap, { initialValue: null });

  totalTimeTracks = computed(() => {
    const album = this.albumResource.value();
    return album ? album.tracks.items.reduce((acc, curr) => acc + curr.duration_ms, 0) : 0;
  })

  albumResource = rxResource({
    params: () => {
      const id = this.queryParamId()?.get('id');
      if (!id) return;
      return { id };
    },
    stream: ({ params }) => this.musicService.getSpotifyAlbum(params.id),
  });

  artistId = computed(() => {
    const album = this.albumResource.value();
    return album ? album.artists[0].id : null;
  });

  artistResource = rxResource({
    params: () => {
      const id = this.artistId();
      if (!id) return;
      return { id };
    },
    stream: ({ params }) => this.musicService.getSpotifyArtistFull(params.id),
  });

  discographyArray = computed<Latest[]>(() => {
    const artistData = this.artistResource.value();
    return artistData ? SpotifyMapper.getDiscographyArray(artistData) : [];
  });

  swiperDiscographyElement = viewChild<ElementRef>('swiperDiscographyAlbum');
  swiperDiscography?: Swiper;
  swiperDiscographyInitialized = false;

  async ngAfterViewChecked() {
    await this.uiService.sleep(2000);
    const elementSwiperDiscography = this.swiperDiscographyElement();
    if (!elementSwiperDiscography) return;

    const slides = elementSwiperDiscography.nativeElement.querySelectorAll('.swiper-slide');
    if (slides.length > 1 && !this.swiperDiscographyInitialized) {
      this.swiperDiscographyInitialized = true;
      this.swiperDiscography = this.uiService.initSwiper(elementSwiperDiscography.nativeElement);
    }
  }

  goBack() {
    this.location.back();
  }
}