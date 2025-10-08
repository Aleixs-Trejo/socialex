// Angular 20
import { Component, inject, input, output, signal } from '@angular/core';
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

@Component({
  selector: 'modal-reactions',
  imports: [RouterLink, NgClass, NgOptimizedImage],
  templateUrl: './modal-reactions.component.html',
})
export class ModalReactionsComponent {
  postsService = inject(PostsService);
  postId = input<string>();
  showReactionType = signal<keyof Reactions>('like');
  closeModalReactions = output<void>();

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
}
