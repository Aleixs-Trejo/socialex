// Angular 20
import { Component, inject, input } from '@angular/core';

// Services
import { AuthService } from '@auth/services/auth.service';
import { Post } from '@socialex/posts/interfaces/posts.interface';
import { PostsService } from '@socialex/posts/services/posts.service';

@Component({
  selector: 'input-comment',
  imports: [],
  templateUrl: './input-comment.component.html',
})
export class InputCommentComponent {
  authService = inject(AuthService);
  postsService = inject(PostsService);
  post = input.required<Post>();

  keydownComment(event: KeyboardEvent, textarea: HTMLTextAreaElement) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.handleCommentSubmit(textarea);
    }
  }

  handleCommentSubmit(textarea: HTMLTextAreaElement) {
    const content = textarea.value.trim();
    if (!content) return;
    
    const postId = this.post().id;
    const authorId = this.authService.getCurrentUser()!.id;
    this.postsService.addComment(postId, content, authorId);

    textarea.value = '';
  }
}