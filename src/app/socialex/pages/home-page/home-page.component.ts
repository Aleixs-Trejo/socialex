// Angular 20
import { afterNextRender, ChangeDetectionStrategy, Component, effect, ElementRef, inject, OnDestroy, signal, viewChild } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Services
import { PostsService } from '@socialex/posts/services/posts.service';

// Interfaces
import { Post } from '@socialex/posts/interfaces/posts.interface';

// Components
import { SectionComponentComponent } from '@socialex/shared/section-component/section-component.component';
import { PostCardComponent } from '@socialex/posts/components/post-card/post-card.component';
import { CreatePostComponent } from "@socialex/posts/components/create-post/create-post.component";
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-home-page',
  imports: [SectionComponentComponent, PostCardComponent, CreatePostComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent implements OnDestroy {
  authService = inject(AuthService);
  postsService = inject(PostsService);

  page = signal(1);
  pageSize = signal(3);
  allPosts = signal<Post[]>([]);
  isLoadingMorePosts = signal(false);
  hasMorePosts = signal(true);

  elementScroll = viewChild<ElementRef>('infiniteScrollTrigger');
  private observer?: IntersectionObserver;

  postsResource = rxResource({
    params: () => ({ page: this.page(), pageSize: this.pageSize(), posts: this.postsService.posts() }),
    stream: ({ params }) => this.postsService.getPosts(params.page, params.pageSize),
  });

  infiniteScrollEffect = effect(() => {
    const newPosts = this.postsResource.value();
    if (!newPosts) return;

    const existing = this.allPosts();
    const unique = newPosts.filter(p => !existing.some(pp => pp.id === p.id));

    if (unique.length > 0) {
      this.allPosts.set([...existing, ...unique]);
    }

    const total = this.postsService.posts().length;
    this.hasMorePosts.set(total > this.allPosts().length);

    this.isLoadingMorePosts.set(false);
  });

  newPostEffect = effect(() => {
    const allPostsService = this.postsService.posts();
    if (!allPostsService) return;

    const latest = [...allPostsService].reverse().at(0);
    if (!latest) return;
    const current = this.allPosts();

    if (!current.some(p => p.id === latest.id)) {
      this.allPosts.set([latest, ...current]);
    }
  })
  
  initScrollObserver =  effect(onCleanUp => {
    const elRef = this.elementScroll();
    if (!elRef) return;

    const elementScroll = elRef?.nativeElement as HTMLElement;
    if (!elementScroll) return;

    this.observer?.disconnect();
    this.observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !this.postsResource.isLoading()) {
        this.isLoadingMorePosts.set(true);
        this.loadMorePosts();
      }
    });

    this.observer.observe(elementScroll);

    onCleanUp(() => {
      this.observer?.disconnect();
      this.observer = undefined;
    });
  });

  loadMorePosts() {
    if (!this.hasMorePosts()) return;
    this.page.update(p => p + 1);
  }
  
  ngOnDestroy() {
    this.observer?.disconnect();
  }
}