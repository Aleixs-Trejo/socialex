import { I18nPluralPipe, NgClass, NgOptimizedImage } from '@angular/common';
import {
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Post } from '@socialex/posts/interfaces/posts.interface';
import { PostDatePipe } from '@socialex/posts/pipes/post-date.pipe';
import { PostsService } from '@socialex/posts/services/posts.service';

@Component({
  selector: 'post-card',
  imports: [PostDatePipe, I18nPluralPipe, NgClass, RouterLink, NgOptimizedImage],
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {
  postsService = inject(PostsService);
  post = input.required<Post>();

  openComments = signal<Set<string>>(new Set());

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

  toggleComments(postId: string) {
    const current = new Set(this.openComments());
    if (current.has(postId)) {
      current.delete(postId);
    } else {
      current.add(postId);
    }
    this.openComments.set(current);
  }
}
