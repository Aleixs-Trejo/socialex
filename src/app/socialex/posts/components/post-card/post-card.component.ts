// Angular 20
import { I18nPluralPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

// Services
import { PostsService } from '@socialex/posts/services/posts.service';

// Interfaces
import { Post } from '@socialex/posts/interfaces/posts.interface';

// Pipes
import { PostDatePipe } from '@socialex/posts/pipes/post-date.pipe';

// Components
import { ModalReactionsComponent } from '../modal-reactions/modal-reactions.component';
import { LenisService } from '@socialex/shared/services/lenis.service';
import { LimitCountActiPipe } from '@socialex/posts/pipes/limit-count-activity.pipe';

@Component({
  selector: 'post-card',
  imports: [
    PostDatePipe,
    I18nPluralPipe,
    NgClass,
    RouterLink,
    NgOptimizedImage,
    ModalReactionsComponent,
    LimitCountActiPipe,
  ],
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {
  postsService = inject(PostsService);
  lenisService = inject(LenisService);

  post = input.required<Post>();
  openModalReactionsByPostId = signal<string | null>(null);

  openCommentPostId = signal<string | null>(null);

  maxReactionsToShow = signal(5);
  maxCommentsToShow = signal(3);
  showAllComments = signal(false);

  i18nPluralPipeComments = {
    '=0': '',
    '=1': '1 comentario',
    other: '# comentarios',
  };

  userPostResource = rxResource({
    params: () => ({ authorId: this.post().authorId }),
    stream: ({ params }) => this.postsService.getAuhtorPost(params.authorId),
  });

  commentsResource = rxResource({
    params: () => ({ postId: this.post().id }),
    stream: ({ params }) => this.postsService.getUsersComments(params.postId),
  });

  totalCommentsResource = rxResource({
    params: () => ({ postId: this.post().id }),
    stream: ({ params }) => this.postsService.getTotalComments(params.postId),
  });

  commentsWithUsersResource = rxResource({
    params: () => ({ postId: this.post().id}),
    stream: ({ params }) => this.postsService.getCommentsWithUsers(params.postId),
  });

  reactionsResource = rxResource({
    params: () => ({ postId: this.post().id }),
    stream: ({ params }) => this.postsService.getUsersReactions(params.postId),
  });

  totalReactionsResource = rxResource({
    params: () => ({ postId: this.post().id }),
    stream: ({ params }) => this.postsService.getTotalReactions(params.postId),
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
    this.lenisService.stopScroll();
  }

  closeReactionsModal() {
    this.openModalReactionsByPostId.set(null);
    this.lenisService.startScroll();
  }
}
