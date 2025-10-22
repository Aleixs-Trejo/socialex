// Angular
import { NgOptimizedImage } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

// Services
import { MusicService } from '@socialex/music/services/music.service';
import { UiStateService } from '@socialex/shared/services/ui-state.service';

// Swiper
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LoaderComponent } from "@components/loader/loader.component";
import { ResourceErrorComponent } from "@components/resource-error/resource-error.component";

@Component({
  selector: 'music-artists',
  imports: [RouterLink, NgOptimizedImage, LoaderComponent, ResourceErrorComponent],
  templateUrl: './music-artist.component.html',
})
export class MusicArtistsComponent implements AfterViewChecked {
  musicSservice = inject(MusicService);
  uiService = inject(UiStateService);

  swiperArtistElement = viewChild<ElementRef>('swiperArtist');
  swiperArtist?: Swiper;
  swiperArtistInitialized = false;

  text = input.required<string>();
  id = input.required<string>();

  musicArtistResource = rxResource({
    params: () => ({ id: this.id() }),
    stream: ({ params }) => this.musicSservice.getSpotifyArtistSimplified(params.id),
  });

  async ngAfterViewChecked() {
    await this.uiService.sleep(2000);
    const elementSwiperArtist = this.swiperArtistElement();
    if (!elementSwiperArtist) return;
    const slides = elementSwiperArtist.nativeElement.querySelectorAll('.swiper-slide');
    if (slides.length > 1 && !this.swiperArtistInitialized) {
      this.swiperArtistInitialized = true;
      this.swiperArtist = this.uiService.initSwiper(elementSwiperArtist.nativeElement);
    }
  }
}