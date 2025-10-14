// Angular
import { AfterContentChecked, Component, ElementRef, viewChild } from '@angular/core';

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
export class AuthCarouselComponent implements AfterContentChecked {
  imagesAuth = images;

  swiperAuthElement = viewChild.required<ElementRef>('swiperAuth');
  swiperAuth: Swiper | undefined = undefined;
  swiperInitialized = false;

  async ngAfterContentChecked() {
    await new Promise((res) => setTimeout(res, 100));
    const elementSwiperAuth = this.swiperAuthElement()?.nativeElement;
    if (!elementSwiperAuth) return;
    const slides = elementSwiperAuth.querySelectorAll('.swiper-slide');
    if (slides.length > 1 && !this.swiperInitialized) {
      this.swiperInitialized = true;
      this.swiperAuthInit(elementSwiperAuth);
    }
  }

  swiperAuthInit(element: HTMLElement) {
    this.swiperAuth = new Swiper(element, {
      modules: [Navigation, Pagination, Scrollbar],
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
  }

}
