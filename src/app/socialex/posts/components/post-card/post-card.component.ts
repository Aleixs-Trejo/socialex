// Angular 20
import { I18nPluralPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Services
import { AuthService } from '@auth/services/auth.service';
import { PostsService } from '@socialex/posts/services/posts.service';
import { UiStateService } from '@socialex/shared/services/ui-state.service';

// Interfaces
import { Post } from '@socialex/posts/interfaces/posts.interface';

// Pipes
import { LimitCountActiPipe } from '@socialex/posts/pipes/limit-count-activity.pipe';

// Components
import { ModalReactionsComponent } from '../modal-reactions/modal-reactions.component';
import { ReactionActionComponent } from '../reaction-action/reaction-action.component';
import { PostCardContentComponent } from '../post-card-content/post-card-content.component';
import { PostCardCommentsComponent } from '../post-card-comments/post-card-comments.component';

@Component({
  selector: 'post-card',
  imports: [
    I18nPluralPipe,
    ModalReactionsComponent,
    LimitCountActiPipe,
    ReactionActionComponent,
    PostCardContentComponent,
    PostCardCommentsComponent
  ],
  templateUrl: './post-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  authService = inject(AuthService);
  postsService = inject(PostsService);
  uiService = inject(UiStateService);

  post = input.required<Post>();
  openModalReactionsByPostId = signal<string | null>(null);

  openCommentPostId = signal<string | null>(null);

  maxReactionsToShow = signal(5);

  totalReactionsCount = signal(0);

  i18nPluralPipeComments = {
    '=0': '',
    '=1': '1 comentario',
    other: '# comentarios',
  };

  postCardEffect = effect(() => {
    const post = this.post();
    if (!post) return;

    this.totalReactionsCount.set(
      this.postsService.getTotalReactions(post.id)()
    );
  });

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

  reactionsResource = rxResource({
    params: () => ({ postId: this.post().id }),
    stream: ({ params }) => this.postsService.getUsersReactions(params.postId),
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
