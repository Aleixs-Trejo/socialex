import { Component, inject, linkedSignal, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { usersData } from '@socialex/users/data/users.data';

import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import {
  I18nPluralPipe,
  NgOptimizedImage,
  SlicePipe,
} from '@angular/common';
import { PostsService } from '@socialex/posts/services/posts.service';
import { PostDatePipe } from '@socialex/posts/pipes/post-date.pipe';
import { PostCardComponent } from '@socialex/posts/components/post-card/post-card.component';

type ShowAvtivity = 'posts' | 'comments';

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

  showActivity = signal<ShowAvtivity>('posts');

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
