import { I18nPluralPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Post } from '@socialex/posts/interfaces/posts.interface';
import { PostDatePipe } from '@socialex/posts/pipes/post-date.pipe';
import { PostsService } from '@socialex/posts/services/posts.service';
import { ModalReactionsComponent } from '../modal-reactions/modal-reactions.component';

@Component({
  selector: 'post-card',
  imports: [
    PostDatePipe,
    I18nPluralPipe,
    NgClass,
    RouterLink,
    NgOptimizedImage,
    ModalReactionsComponent
  ],
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {
  postsService = inject(PostsService);
  post = input.required<Post>();
  openModalReactionsByPostId = signal<string | null>(null);

  openCommentPostId = signal<string | null>(null);

  i18nPluralPipeComments = {
    '=0': '',
    '=1': '1 comentario',
    other: '# comentarios',
  };

  userPostResource = rxResource({
    stream: () => this.postsService.getAuhtorPost(this.post().authorId),
  });

  commentsResource = rxResource({
    stream: () => this.postsService.getUsersComments(this.post().id),
  });

  totalCommentsResource = rxResource({
    stream: () => this.postsService.getTotalComments(this.post().id),
  });

  commentsWithUsersResource = rxResource({
    stream: () => this.postsService.getCommentsWithUsers(this.post().id),
  });

  reactionsResource = rxResource({
    stream: () => this.postsService.getUsersReactions(this.post().id),
  });

  totalReactionsResource = rxResource({
    stream: () => this.postsService.getTotalReactions(this.post().id),
  });

  toggleCommentPost(postId: string) {
    if (this.openCommentPostId() === postId) {
      this.openCommentPostId.set(null);
      return;
    }
    this.openCommentPostId.set(postId);
  }

  openReactionsModal(postId: string) {
    this.openModalReactionsByPostId.set(postId);
  }

  closeReactionsModal() {
    this.openModalReactionsByPostId.set(null);
  }
}
