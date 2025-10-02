// Angular
import { Component, inject, linkedSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  I18nPluralPipe,
  NgOptimizedImage,
  SlicePipe,
} from '@angular/common';

// RxJS
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

// Services
import { PostsService } from '@socialex/posts/services/posts.service';

// Types
import { Activity } from '@socialex/users/types/activity.types';

// Data
import { usersData } from '@socialex/users/data/users.data';

// Components
import { PostCardComponent } from '@socialex/posts/components/post-card/post-card.component';

@Component({
  selector: 'app-profile-user-page',
  imports: [
    NgOptimizedImage,
    I18nPluralPipe,
    SlicePipe,
    PostCardComponent
  ],
  templateUrl: './profile-user-page.component.html',
})
export default class ProfileUserPageComponent {
  activatedRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);
  queryParamId = toSignal(this.activatedRoute.paramMap, { initialValue: null });

  showActivity = signal<Activity>('posts');

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
    return usersData.find((user) => user.id === +id);
  });

  postsUserResource = rxResource({
    params: () => ({ userId: this.user()?.id }),
    stream: () =>
      this.postsService.getAllPostsFromUser(Number(this.user()?.id)),
  });

  commentsPostUserResource = rxResource({
    params: () => ({ userId: this.user()?.id }),
    stream: () =>
      this.postsService.getAllCommentsPostsFromUser(Number(this.user()?.id)),
  });
}
