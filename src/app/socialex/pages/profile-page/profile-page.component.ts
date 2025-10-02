// Angular
import { I18nPluralPipe, NgOptimizedImage, SlicePipe } from '@angular/common';
import { Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Services
import { AuthService } from '@auth/services/auth.service';

// Components
import { PostCardComponent } from '@socialex/posts/components/post-card/post-card.component';
import { PostsService } from '@socialex/posts/services/posts.service';

// Types
import { Activity } from '@socialex/users/types/activity.types';

@Component({
  selector: 'app-profile-page',
  imports: [I18nPluralPipe, SlicePipe, PostCardComponent],
  templateUrl: './profile-page.component.html',
})
export default class ProfilePageComponent {
  authService = inject(AuthService);
  postsService = inject(PostsService);
  showActivity = signal<Activity>('posts');

  user = linkedSignal(() => this.authService.user());

  i18nPluralProfilePosts = {
    '=0': 'No tiene publicaciones',
    '=1': '1 publicación',
    other: '# publicaciones',
  };

  i18nPluralProfileComments = {
    '=0': 'No tiene comentarios',
    '=1': '1 comentario',
    other: '# comentarios',
  };

  postsUserResource = rxResource({
    params: () => ({ userId: this.user()!.id }),
    stream: () => this.postsService.getAllPostsFromUser(this.user()!.id),
  });

  commentsPostUserResource = rxResource({
    params: () => ({ userId: this.user()!.id }),
    stream: () => this.postsService.getAllCommentsPostsFromUser(this.user()!.id),
  });
}
