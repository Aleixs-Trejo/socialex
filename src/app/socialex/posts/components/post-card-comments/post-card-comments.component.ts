// Angular 20
import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

// Services
import { PostsService } from '@socialex/posts/services/posts.service';

// Pipes
import { PostDatePipe } from '@socialex/posts/pipes/post-date.pipe';

// Interfaces
import { Post } from '@socialex/posts/interfaces/posts.interface';
import { InputCommentComponent } from '../input-comment/input-comment.component';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'post-card-comments',
  imports: [NgClass, RouterLink, PostDatePipe, InputCommentComponent],
  templateUrl: './post-card-comments.component.html',
})
export class PostCardCommentsComponent {
  authService = inject(AuthService);
  postsService = inject(PostsService);
  post = input.required<Post>();
  openComment = input.required<string | null>();

  showAllComments = signal(false);
  maxCommentsToShow = signal(3);

  commentsWithUsersResource = rxResource({
    params: () => ({ postId: this.post().id, showAll: this.showAllComments(), posts: this.postsService.posts() }),
    stream: ({ params }) =>
      params.showAll
        ? this.postsService.getCommentsWithUsers(params.postId)
        : this.postsService.getLimitedTotalComments(params.postId, 3),
  });

  toggleViewComments() {
    console.log(this.showAllComments());
    this.showAllComments.set(!this.showAllComments());
  }
}