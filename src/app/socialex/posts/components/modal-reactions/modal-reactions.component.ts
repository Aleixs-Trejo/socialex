// Angular 20
import { AfterViewInit, Component, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

// Services
import { PostsService } from '@socialex/posts/services/posts.service';

// RxJS
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

// Interfaces
import { Reactions } from '@socialex/posts/interfaces/posts.interface';

// Helpers
import { btnsReactions } from '@socialex/posts/helpers/reaction.helper';
import Lenis from 'lenis';

@Component({
  selector: 'modal-reactions',
  imports: [RouterLink, NgClass, NgOptimizedImage],
  templateUrl: './modal-reactions.component.html',
})
export class ModalReactionsComponent implements AfterViewInit {
  postsService = inject(PostsService);
  postId = input<string>();
  showReactionType = signal<keyof Reactions>('like');
  closeModalReactions = output<void>();

  private reactionsLenis?: Lenis;
  contentWrapper = viewChild.required<ElementRef>('lenisReactionsWrapper');

  allReactionsResource = rxResource({
    params: () => ({ postId: `${this.postId()}` }),
    stream: ({ params }) => this.postsService.getAllReactionsByUsers(params.postId),
  });

  reactionsResource = rxResource({
    params: () => {
      const pid = this.postId();
      const type = this.showReactionType();
      return pid ? { postId: pid, reactionType: type } : null;
    },
    stream: ({ params }) => {
      if (!params) return of([]);
      return this.postsService.getReactionsTypeByUser(params.postId, params.reactionType);
    },
  });

  get btnsReactions() {
    const reactions = this.allReactionsResource.value() ?? [];
    return btnsReactions.map(obj => ({
      ...obj,
      count: reactions.filter(r => r.type === obj.type).length || 0,
    }))
  }

  changeReactionType(reactionType: keyof Reactions) {
    this.showReactionType.set(reactionType);
  }

  closeModal() {
    this.closeModalReactions.emit();
  }

  ngAfterViewInit(): void {
    this.initReactionsLenis();
    const animate = (time: number) => {
      this.reactionsLenis?.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  initReactionsLenis() {
    const wrapperEl  = this.contentWrapper()?.nativeElement;
    if (!wrapperEl ) return;

    this.reactionsLenis = new Lenis({
      wrapper: wrapperEl ,
      content: wrapperEl.firstElementChild as HTMLElement,
    });
  }

  ngOnDestroy(): void {
    this.reactionsLenis?.destroy();
  }
}
