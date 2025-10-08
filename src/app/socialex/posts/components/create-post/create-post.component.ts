import { Component, effect, inject, signal } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { PostsService } from '@socialex/posts/services/posts.service';

@Component({
  selector: 'create-post',
  imports: [],
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent {
  authService = inject(AuthService);
  postsService = inject(PostsService);

  categories = signal<string[]>([]);

  get currentUser() {
    const user = this.authService.getCurrentUser();
    if (!user) throw new Error('No user found');
    return user;
  }

  keydownPost(event: KeyboardEvent, textarea: HTMLTextAreaElement) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    this.createPost(this.currentUser.id, textarea);
  }
}

  createPost(authorId: number, textarea: HTMLTextAreaElement) {
    const content = textarea.value.trim();
    const categories = this.categories();
    if (!content) return;
    this.postsService.createPost(authorId, content, categories);
    textarea.value = '';
  }
}