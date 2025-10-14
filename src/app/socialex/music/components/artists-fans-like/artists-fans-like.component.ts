import { NgOptimizedImage } from '@angular/common';
import { AfterContentChecked, Component, ElementRef, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interfaces
import { RelatedArtistsItem } from '@socialex/music/interfaces/spotify-artist.interface';

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
export class ArtistsFansLikeComponent implements AfterContentChecked {
  artistsRelated = input.required<RelatedArtistsItem[]>();

  swiperArtistsRelatedElement = viewChild<ElementRef>('swiperArtistsRelated');
  swiperArtistsRelated: Swiper | undefined = undefined;
  swiperArtistsRelatedInitialized = false;

  async ngAfterContentChecked() {
    await new Promise((res) => setTimeout(res, 2000));
    const elementSwiperArtistsRelated = this.swiperArtistsRelatedElement()?.nativeElement;
    if (!elementSwiperArtistsRelated) return;

    const slides = elementSwiperArtistsRelated.querySelectorAll('.swiper-slide');
    if (slides.length > 1 && !this.swiperArtistsRelatedInitialized) {
      this.swiperArtistsRelatedInitialized = true;
      this.swiperArtistsRelatedInit(elementSwiperArtistsRelated);
    }
  }

  swiperArtistsRelatedInit(element: HTMLElement) {
    this.swiperArtistsRelated = new Swiper(element, {
      modules: [Scrollbar, Navigation],
      slidesPerView: 1.2,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        450: {
          slidesPerView: 2.2,
        },
        640: {
          slidesPerView: 3.2
        },
      }
    });
  }
}