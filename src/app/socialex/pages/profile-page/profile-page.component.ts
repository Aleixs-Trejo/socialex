// Angular
import { I18nPluralPipe, SlicePipe } from '@angular/common';
import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Services
import { AuthService } from '@auth/services/auth.service';

// Components
import { PostCardComponent } from '@socialex/posts/components/post-card/post-card.component';
import { PostsService } from '@socialex/posts/services/posts.service';

// Types
import { Activity } from '@socialex/users/types/activity.types';

const activities: { eng: Activity; esp: string }[] = [
  { eng: 'posts', esp: 'Publicaciones' },
  { eng: 'comments', esp: 'Comentarios' },
  { eng: 'reactions', esp: 'Reacciones' },
];

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
  activities = activities;

  get currentUser() {
    const user = this.authService.getCurrentUser();
    if (!user) throw new Error('No user found');
    return user;
  }

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
    params: () => ({ userId: this.currentUser.id }),
    stream: ({ params }) => this.postsService.getAllPostsFromUser(params.userId),
  });

  commentsPostUserResource = rxResource({
    params: () => ({ userId: this.currentUser.id }),
    stream: ({ params }) => this.postsService.getAllCommentsPostsFromUser(params.userId),
  });

  reactionsPostUserResource = rxResource({
    params: () => ({ userId: this.currentUser.id }),
    stream: ({ params }) => this.postsService.getAllReactionsPostsFromUser(params.userId),
  });

  resourcesMap = {
    posts: this.postsUserResource,
    comments: this.commentsPostUserResource,
    reactions: this.reactionsPostUserResource,
  }

  activePostsResource = computed(() => this.resourcesMap[this.showActivity()]);
}
