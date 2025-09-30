// Angular 20
import { Injectable } from '@angular/core';

// Data
import { posts } from '../data/posts.data';
import { usersData } from '@socialex/users/data/users.data';

// Interfaces
import {
  Comment,
  Post,
  Reaction,
  Reactions,
} from '../interfaces/posts.interface';
import { User } from '@socialex/users/interfaces/user.interface';

// RxJS
import { Observable, of } from 'rxjs';

// Helpers
import { getReactionIcon } from '@socialex/posts/helpers/reaction.helper';

@Injectable({ providedIn: 'root' })
export class PostsService {
  users: User[] = usersData;
  posts: Post[] = posts;

  getPosts(page: number, pageSize: number): Observable<Post[]> {
    const start = (page - 1) * pageSize;
    const paginated = this.posts.slice(start, start + pageSize);
    return of(paginated);
  }

  getAuhtorPost(authorId: number): Observable<User> {
    const author = this.users.find((u) => u.id === authorId);
    if (!author) return of();
    return of(author);
  }

  getUsersComments(postId: string): Observable<User[]> {
    const post = this.posts.find((p) => p.id === postId);
    if (!post) return of([]);
    const comments = post.comments
      .map((c) => this.users.find((u) => u.id === c.authorId))
      .filter((u): u is User => u !== undefined);

    const unique = Array.from(new Map(comments.map((u) => [u.id, u])).values());
    return of(unique);
  }

  getUsersReactions(postId: string): Observable<User[]> {
    const post = this.posts.find((p) => p.id === postId);
    if (!post) return of([]);
    const allReactions: Reaction[] = Object.values(post.reactions).flat();

    const users = allReactions
      .map((r) => this.users.find((u) => u.id === r.authorId))
      .filter((u): u is User => u !== undefined);

    const unique = Array.from(new Map(users.map((u) => [u.id, u])).values());
    return of(unique);
  }

  getTotalReactions(postId: string): Observable<number> {
    const post = this.posts.find((p) => p.id === postId);
    if (!post) return of(0);
    const total = Object.values(post.reactions).reduce(
      (acc, cur) => acc + cur.length,
      0
    );
    return of(total);
  }

  getAllReactionsByUsers(
    postId: string
  ): Observable<{ user: User; type: keyof Reactions, icon: string }[]> {
    const post = this.posts.find((p) => p.id === postId);
    if (!post) return of([]);

    const result: { user: User; type: keyof Reactions, icon: string }[] = [];
    (Object.keys(post.reactions) as (keyof Reactions)[]).forEach((type) => {
      post.reactions[type].forEach((reaction) => {
        const user = this.users.find((u) => u.id === reaction.authorId);
        if (user) result.push({ user, type, icon: getReactionIcon(type) });
      });
    });
    return of(result);
  }

  getReactionsTypeByUser(
    postId: string,
    type: keyof Reactions
  ): Observable<{ user: User; type: keyof Reactions; icon: string }[]> {
    const post = this.posts.find((p) => p.id === postId);
    if (!post) return of([]);

    const result = post.reactions[type]
      .map((r) => {
        const user = this.users.find((u) => u.id === r.authorId);
        return user ? { user, type, icon: getReactionIcon(type) } : null;
      })
      .filter(
        (item): item is { user: User; type: keyof Reactions; icon: string } =>
          item !== null
      );
    console.log(result);
    return of(result);
  }

  getTotalComments(postId: string): Observable<number> {
    const post = this.posts.find((p) => p.id === postId);
    if (!post) return of(0);
    const total = post.comments.length;
    return of(total);
  }

  getCommentsWithUsers(
    postId: string
  ): Observable<{ comment: Comment; user: User }[]> {
    const post = this.posts.find((p) => p.id === postId);
    if (!post) return of([]);

    const joined = post.comments
      .map((c) => {
        const user = this.users.find((u) => u.id === c.authorId);
        return user ? { comment: c, user } : null;
      })
      .filter(
        (item): item is { comment: Comment; user: User } => item !== null
      );

    return of(joined);
  }

  getAllPostsFromUser(userId: number): Observable<Post[]> {
    const user = this.users.find((u) => u.id === userId);
    if (!user) return of([]);

    const postsFromUser = this.posts.filter((p) => p.authorId === userId);
    return of(postsFromUser);
  }

  getAllCommentsPostsFromUser(userId: number): Observable<Post[]> {
    const user = this.users.find((u) => u.id === userId);
    if (!user) return of([]);

    const postsCommentsFromUser = this.posts.filter((p) =>
      p.comments.some((c) => c.authorId === userId)
    );
    return of(postsCommentsFromUser);
  }
}
