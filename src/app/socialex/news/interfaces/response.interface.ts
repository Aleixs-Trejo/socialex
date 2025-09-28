export interface NewsResponse {
  status: string;
  request_id: string;
  data: ArticlesNews;
}

export interface ArticlesNews {
  all_articles: NewsData[];
  top_news: any[];
  twitter_posts: any[];
}

export interface NewsData {
  title: string;
  link: string;
  snippet: string;
  photo_url: string;
  thumbnail_url: string;
  published_datetime_utc: string;
  authors: string[];
  source_url: string;
  source_name: string;
  source_logo_url: string;
  source_favicon_url: string;
  source_publication_id: string;
  related_topics: Topic[];
}

export interface Topic {
  topic_id: string;
  topic_name: string;
}




export interface TheNewsResponse {
  meta: Meta;
  data: TheNewsDaata[];
}

export interface Meta {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

export interface TheNewsDaata {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: any;
}