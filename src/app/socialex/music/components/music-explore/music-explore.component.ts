// Angular
import { AfterViewInit, Component, ElementRef, inject, OnChanges, viewChild } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Services
import { MusicService } from '@socialex/music/services/music.service';

// Swiper
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Scrollbar, Navigation } from 'swiper/modules';

// Components
import { MusicExploreCardComponent } from "../music-explore-card/music-explore-card.component";

@Component({
  selector: 'music-explore',
  imports: [MusicExploreCardComponent],
  templateUrl: './music-explore.component.html',
})
export class MusicExploreComponent implements AfterViewInit, OnChanges {
  musicService = inject(MusicService);
  swiperBrowseElement = viewChild<ElementRef>('swiperExplore');
  swiperBrowse: Swiper | undefined = undefined;

  musicExploreResource = rxResource({
    stream: () => this.musicService.getExploreSpotify(),
  });

  ngOnChanges() {
    if (!this.swiperBrowse) return;
    this.swiperBrowse.destroy(true, true);
    this.swiperBrowseInit();
  }

  async ngAfterViewInit() {
    await new Promise((res) => setTimeout(res, 2000));
    this.swiperBrowseInit();
  }

  swiperBrowseInit() {
    const elementSwiperBrowse = this.swiperBrowseElement()?.nativeElement;
    if (!elementSwiperBrowse) return;

    this.swiperBrowse = new Swiper(elementSwiperBrowse, {
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