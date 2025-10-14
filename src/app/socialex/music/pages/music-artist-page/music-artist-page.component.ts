// Angular
import { NgClass, NgOptimizedImage, SlicePipe } from '@angular/common';
import { AfterViewChecked, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

// Mapper
import { SpotifyMapper } from '@socialex/music/mapper/music.mapper';

// Services
import { MusicService } from '@socialex/music/services/music.service';

// Interfaces
import { Latest } from '@socialex/music/interfaces/spotify-artist.interface';

// Pipes
import { FilterByDiscographyPipe } from '@socialex/music/pipes/filter-by-discography.pipe';
import { FormatMillisecondsPipe } from '@socialex/music/pipes/format-milliseconds.pipe';
import { FormatNumberPipe } from '@socialex/music/pipes/format-number.pipe';
import { DecodeHtmlPipe } from '@socialex/pipes/decode-html.pipe';

// Components
import { DiscographyCardComponent } from "@socialex/music/components/discography-card/discography-card.component";
import { ArtistsFansLikeComponent } from "@socialex/music/components/artists-fans-like/artists-fans-like.component";

// Swiper
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Scrollbar, Navigation } from 'swiper/modules';
import { UiStateService } from '@socialex/shared/services/ui-state.service';
import { LoaderComponent } from "@components/loader/loader.component";
import { ResourceErrorComponent } from "@components/resource-error/resource-error.component";

export type DiscographyType = 'popular' | 'albums' | 'singles';

const btnsDiscography: { name: DiscographyType; text: string }[] = [
  { name: 'popular', text: 'Lanzamientos populares' },
  { name: 'albums', text: 'Álbumes' },
  { name: 'singles', text: 'Sencillos y EP' },
];

@Component({
  selector: 'music-artist-page',
  imports: [SlicePipe, FormatMillisecondsPipe, NgOptimizedImage, FormatNumberPipe, NgClass, FilterByDiscographyPipe, DiscographyCardComponent, DecodeHtmlPipe, ArtistsFansLikeComponent, LoaderComponent, ResourceErrorComponent],
  templateUrl: './music-artist-page.component.html',
})
export default class MusicArtistPageComponent implements AfterViewChecked {
  musicService = inject(MusicService);
  uiService = inject(UiStateService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  btnsDiscography = btnsDiscography;
  showByDiscography = signal<DiscographyType>('popular');
  discographyArray = computed<Latest[]>(() => {
    const artistData = this.artistResource.value();
    return artistData ? SpotifyMapper.getDiscographyArray(artistData) : [];
  })

  queryParamId = toSignal(this.activatedRoute.paramMap, { initialValue: null });

  artistResource = rxResource({
    params: () => {
      const id = this.queryParamId()?.get('id');
      if (!id) return;
      return { id };
    },
    stream: ({ params }) => this.musicService.getSpotifyArtistFull(params.id),
  });

  swiperDiscographyElement = viewChild<ElementRef>('swiperDiscography');
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
    this.router.navigate(['/socialex/music']);
  }
}