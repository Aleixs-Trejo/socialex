import { ElementRef, Injectable, signal } from '@angular/core';

// Interfaces
import { Reactions, ReactionType } from '@socialex/posts/interfaces/posts.interface';

// Swiper
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Injectable({providedIn: 'root'})
export class UiStateService {
  showReactionAction = signal<string | null>(null);
  private _reactionByPost = signal<Record<string, ReactionType | null>>({});
  reactionData = signal<{postId: string; type: keyof Reactions, icon: string, title: string } | null>(null);

  getReactionForPost(postId: string) {
    return this._reactionByPost()[postId] ?? null;
  }

  setReactionForPost(postId: string, reaction: ReactionType | null) {
    this._reactionByPost.update(posts => {
      return { ...posts, [postId]: reaction };
    });
  }

  openReactionAction(postId: string) {
    if (this.showReactionAction() === postId) {
      this.showReactionAction.set(null);
      return;
    }
    this.showReactionAction.set(postId);
  }

  closeReactionAction() {
    this.showReactionAction.set(null);
  }

  setReactionData(postId: string, data: { type: keyof Reactions, icon: string, title: string }) {
    this.reactionData.set({ postId, ...data });
  }

  defaultConfigSwiper: SwiperOptions = {
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
  };

  initSwiper(element: HTMLElement, customConfig: Partial<SwiperOptions> = {}): Swiper | undefined {
    const config = { ...this.defaultConfigSwiper, ...customConfig };
    return new Swiper(element, config);
  }

  destroySwiper(swiper?: Swiper) {
    if (swiper) swiper.destroy(true, true);
  }

  async sleep(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}