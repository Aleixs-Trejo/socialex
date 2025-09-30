// Angular 20
import { Component, inject, input, output, signal } from '@angular/core';

// Services
import { PostsService } from '@socialex/posts/services/posts.service';

// RxJS
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

// Types
type ReactionType = 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry';

@Component({
  selector: 'modal-reactions',
  imports: [RouterLink],
  templateUrl: './modal-reactions.component.html',
})
export class ModalReactionsComponent {
  postsService = inject(PostsService);
  postId = input.required<string>();
  showReactionType = signal<ReactionType>('like');
  closeModalReactions = output<void>();

  reactionsResource = rxResource({
    params: () => ({ postId: this.postId(), reactionType: this.showReactionType() }),
    stream: ({ params }) => this.postsService.getReactionsTypeByUser(params.postId, params.reactionType),
  });

  changeReactionType(reactionType: ReactionType) {
    this.showReactionType.set(reactionType);
  }

  closeModal() {
    this.closeModalReactions.emit();
  }
}
