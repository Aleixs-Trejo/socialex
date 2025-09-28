import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SectionComponentComponent } from '@socialex/components/section-component/section-component.component';
import { NewsService } from '@socialex/news/services/news.service';

@Component({
  selector: 'app-news-page',
  imports: [SectionComponentComponent, RouterLink],
  templateUrl: './news-page.component.html',
})
export default class NewsPageComponent {
  newsService = inject(NewsService);

  newsResource = rxResource({
    stream: () => this.newsService.getLastNews(),
  });
}