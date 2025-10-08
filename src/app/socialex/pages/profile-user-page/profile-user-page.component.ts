// Angular
import {
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nPluralPipe, SlicePipe } from '@angular/common';

// RxJS
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

// Services
import { PostsService } from '@socialex/posts/services/posts.service';

// Types
import { Activity } from '@socialex/users/types/activity.types';

// Components
import { PostCardComponent } from '@socialex/posts/components/post-card/post-card.component';
import { AuthService } from '@auth/services/auth.service';

const activities: { eng: Activity; esp: string }[] = [
  { eng: 'posts', esp: 'Publicaciones' },
  { eng: 'comments', esp: 'Comentarios' },
  { eng: 'reactions', esp: 'Reacciones' },
];

@Component({
  selector: 'app-profile-user-page',
  imports: [I18nPluralPipe, SlicePipe, PostCardComponent],
  templateUrl: './profile-user-page.component.html',
})
export default class ProfileUserPageComponent {
  authService = inject(AuthService);
  activatedRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);
  queryParamId = toSignal(this.activatedRoute.paramMap, { initialValue: null });

  showActivity = signal<Activity>('posts');
  activities = activities;

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

  user = linkedSignal(() => {
    const id = this.queryParamId()?.get('userId');
    if (!id) return null;
    return this.authService
      .allUsersAndAuthUsers()
      .find((user) => user.id === +id);
  });

  postsUserResource = rxResource({
    params: () => ({ userId: this.user()?.id }),
    stream: ({ params }) =>
      this.postsService.getAllPostsFromUser(Number(params.userId)),
  });

  commentsPostUserResource = rxResource({
    params: () => ({ userId: this.user()?.id }),
    stream: ({ params }) =>
      this.postsService.getAllCommentsPostsFromUser(Number(params.userId)),
  });

  reactionsPostUserResource = rxResource({
    params: () => ({ userId: this.user()!.id }),
    stream: ({ params }) => this.postsService.getAllReactionsPostsFromUser(params.userId),
  });

  resourcesMap = {
    posts: this.postsUserResource,
    comments: this.commentsPostUserResource,
    reactions: this.reactionsPostUserResource,
  }

  activePostsResource = computed(() => this.resourcesMap[this.showActivity()]);
}
