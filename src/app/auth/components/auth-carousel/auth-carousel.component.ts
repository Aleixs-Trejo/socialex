// Angular
import { AfterViewInit, Component, ElementRef, OnChanges, viewChild } from '@angular/core';

// Swiper
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'assets/img/img-auth-carousel-1.jpg',
  'assets/img/img-auth-carousel-2.jpg',
  'assets/img/img-auth-carousel-3.jpg',
  'assets/img/img-auth-carousel-4.jpg',
  'assets/img/img-auth-carousel-5.jpg',
];

@Component({
  selector: 'auth-carousel',
  imports: [],
  templateUrl: './auth-carousel.component.html',
})
export class AuthCarouselComponent implements AfterViewInit, OnChanges {
  imagesAuth = images;
  swiperAuthElement = viewChild.required<ElementRef>('swiperAuth');

  swiper: Swiper | undefined = undefined;

  ngOnChanges() {
    if (!this.swiper) return;
    this.swiper?.destroy(true, true);
    this.swiperInit();
  }

  async ngAfterViewInit() {
    await new Promise((res) => setTimeout(res, 100));
    this.swiperInit();
  }

  swiperInit() {
    const element = this.swiperAuthElement().nativeElement;
    if (!element) return;

    this.swiper = new Swiper(element, {
      modules: [Navigation, Pagination, Scrollbar],
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
  }

}
