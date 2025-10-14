// Angular
import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, input, OnChanges, viewChild } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

// Services
import { MusicService } from '@socialex/music/services/music.service';

// Swiper
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Scrollbar, Navigation } from 'swiper/modules';

@Component({
  selector: 'music-artist',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './music-artist.component.html',
})
export class MusicArtistComponent implements AfterViewInit, OnChanges {
  musicSservice = inject(MusicService);
  swiperArtistElement = viewChild<ElementRef>('swiperArtist');
  swiperArtist: Swiper | undefined = undefined;

  id = input.required<string>();

  musicArtistResource = rxResource({
    params: () => ({ id: this.id() }),
    stream: ({ params }) => this.musicSservice.getSpotifyArtistSimplified(params.id),
  });

  ngOnChanges() {
    if (!this.swiperArtist) return;
    this.swiperArtist.destroy(true, true);
    this.swiperArtistInit();
  }

  async ngAfterViewInit() {
    await new Promise((res) => setTimeout(res, 2000));
    this.swiperArtistInit();
  }

  swiperArtistInit() {
    const elementSwiperBrowse = this.swiperArtistElement()?.nativeElement;
    if (!elementSwiperBrowse) return;

    this.swiperArtist = new Swiper(elementSwiperBrowse, {
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