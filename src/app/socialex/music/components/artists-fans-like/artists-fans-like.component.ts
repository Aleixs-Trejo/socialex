import { NgOptimizedImage } from '@angular/common';
import { AfterViewChecked as AfterViewChecked, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interfaces
import { RelatedArtistsItem } from '@socialex/music/interfaces/spotify-artist.interface';
import { UiStateService } from '@socialex/shared/services/ui-state.service';

// Swiper
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Scrollbar, Navigation } from 'swiper/modules';

@Component({
  selector: 'artists-fans-like',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './artists-fans-like.component.html',
})
export class ArtistsFansLikeComponent implements AfterViewChecked {
  artistsRelated = input.required<RelatedArtistsItem[]>();
  uiService = inject(UiStateService);

  swiperArtistsRelatedElement = viewChild<ElementRef>('swiperArtistsRelated');
  swiperArtistsRelated?: Swiper;
  swiperArtistsRelatedInitialized = false;

  async ngAfterViewChecked() {
    await this.uiService.sleep(2000);
    const el = this.swiperArtistsRelatedElement();
    if (!el) return;

    const slides = el.nativeElement.querySelectorAll('.swiper-slide');
    if (slides.length > 1 && !this.swiperArtistsRelatedInitialized) {
      this.swiperArtistsRelatedInitialized = true;
      this.swiperArtistsRelated = this.uiService.initSwiper(el.nativeElement);
    }
  }
}