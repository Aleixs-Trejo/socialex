// Angular
import { AfterViewChecked, Component, ElementRef, inject, viewChild } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Services
import { MusicService } from '@socialex/music/services/music.service';

// Swiper
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Components
import { MusicExploreCardComponent } from "../music-explore-card/music-explore-card.component";
import { UiStateService } from '@socialex/shared/services/ui-state.service';

@Component({
  selector: 'music-explore',
  imports: [MusicExploreCardComponent],
  templateUrl: './music-explore.component.html',
})
export class MusicExploreComponent implements AfterViewChecked {
  musicService = inject(MusicService);
  uiService = inject(UiStateService);

  swiperBrowseElement = viewChild<ElementRef>('swiperExplore');
  swiperBrowse?: Swiper;
  swiperBrowseInitialized = false;

  musicExploreResource = rxResource({
    stream: () => this.musicService.getExploreSpotify(),
  });

  async ngAfterViewChecked() {
    await this.uiService.sleep(2000);
    const elementSwiperBrowse = this.swiperBrowseElement()?.nativeElement;
    if (!elementSwiperBrowse) return;
    const slides = elementSwiperBrowse.querySelectorAll('.swiper-slide');
    if (slides.length > 1 && !this.swiperBrowseInitialized) {
      this.swiperBrowseInitialized = true;
      this.swiperBrowse = this.uiService.initSwiper(elementSwiperBrowse);
    }
  }
}