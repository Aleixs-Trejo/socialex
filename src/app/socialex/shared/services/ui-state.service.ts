import { Injectable, signal } from '@angular/core';
import { Reactions, ReactionType } from '@socialex/posts/interfaces/posts.interface';

@Injectable({providedIn: 'root'})
export class UiStateService {
  showReactionAction = signal<string | null>(null);

  private _reactionByPost = signal<Record<string, ReactionType | null>>({});

  reactionData = signal<{postId: string; type: keyof Reactions, icon: string, title: string } | null>(null);

  getReactionForPost(postId: string) {
    return this._reactionByPost()[postId] ?? null;
  }

  setReactionForPost(postId: string, reaction: ReactionType | null) {
    this._reactionByPost.update(posts => {
      return { ...posts, [postId]: reaction };
    });
  }

  openReactionAction(postId: string) {
    if (this.showReactionAction() === postId) {
      this.showReactionAction.set(null);
      return;
    }
    this.showReactionAction.set(postId);
  }

  closeReactionAction() {
    this.showReactionAction.set(null);
  }

  setReactionData(postId: string, data: { type: keyof Reactions, icon: string, title: string }) {
    this.reactionData.set({ postId, ...data });
  }
}