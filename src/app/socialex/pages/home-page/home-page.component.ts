// Angular 20
import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Interfaces
import { Post } from '@socialex/posts/interfaces/posts.interface';

// Services
import { PostsService } from '@socialex/posts/services/posts.service';

// Components
import { SectionComponentComponent } from '@socialex/components/section-component/section-component.component';
import { PostCardComponent } from '@socialex/posts/components/post-card/post-card.component';

@Component({
  selector: 'app-home-page',
  imports: [SectionComponentComponent, PostCardComponent],
  templateUrl: './home-page.component.html',
})
export default class HomePageComponent {
  postsService = inject(PostsService);
  page = signal(1);
  pageSize = signal(51);
  allPosts = signal<Post[]>([]);

  elementScroll = viewChild.required<ElementRef<HTMLDivElement>>('infiniteScroll');

  postsResource = rxResource({
    params: () => ({ page: this.page(), pageSize: this.pageSize() }),
    stream: ({ params }) => this.postsService.getPosts(params.page, params.pageSize),
  });
}