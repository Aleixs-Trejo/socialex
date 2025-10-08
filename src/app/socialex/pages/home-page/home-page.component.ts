// Angular 20
import { AfterViewInit, Component, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
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
})
export default class HomePageComponent implements AfterViewInit {
  authService = inject(AuthService);
  postsService = inject(PostsService);

  page = signal(1);
  pageSize = signal(5);
  allPosts = signal<Post[]>([]);
  isLoadingMorePosts = signal(false);

  postsResource = rxResource({
    params: () => ({ page: this.page(), pageSize: this.pageSize(), posts: this.postsService.posts() }),
    stream: ({ params }) => this.postsService.getPosts(params.page, params.pageSize),
  });

  infiniteScrollEffect = effect(() => {
    const newPosts = this.postsResource.value();
    if (!newPosts) return;
    this.allPosts.update(prev => [...newPosts.filter(p => !prev.some(pp => pp.id === p.id)), ...prev]);
    this.isLoadingMorePosts.set(false);
  });
  
  elementScroll = viewChild<ElementRef>('infiniteScrollTrigger');
  
  private observer?: IntersectionObserver;
  
  ngAfterViewInit() {
    this.infiniteScrollInit();
  }
  
  infiniteScrollInit() {
    const elementScroll = this.elementScroll()?.nativeElement;
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
  }

  loadMorePosts() {
    const total = this.postsService.posts().length;
    if (this.allPosts().length >= total) return;
    this.page.update(p => p + 1);
  }
  
  ngOnDestroy() {
    this.observer?.disconnect();
  }
}