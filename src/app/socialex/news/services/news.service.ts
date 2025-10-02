// Angular
import { inject, Injectable } from '@angular/core';

// Interfaces
import { NewsData, NewsResponse } from '../interfaces/response.interface';

// Environment
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';

const { newsApiUrl, newsApiKey, newsApiHost, alesisNewsHeader } = environment;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private http = inject(HttpClient);

  private newsCache = new Map<string, NewsData[]>();

  getLastNews(): Observable<NewsData[]> {
    const cacheKeyNews = 'last-news';
    const cachedLastNews = this.newsCache.get(cacheKeyNews);

    if (cachedLastNews) {
      return of(cachedLastNews);
    }

    return this.http
      .get<NewsResponse>(newsApiUrl, {
        headers: {
          'x-rapidapi-key': newsApiKey,
          'x-rapidapi-host': newsApiHost,
          'alesis-news-header': alesisNewsHeader,
        }
      })
      .pipe(
        tap(res => this.newsCache.set(cacheKeyNews, res.data['all_articles'])),
        map(res => res.data['all_articles'])
      );
  }
}
