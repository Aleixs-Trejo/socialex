import { Injectable, signal } from '@angular/core';
import { Reactions } from '@socialex/posts/interfaces/posts.interface';

@Injectable({providedIn: 'root'})
export class UiStateService {

  showReactionAction = signal<string | null>(null);

  reactionData = signal<{ type: keyof Reactions, icon: string, title: string } | null>(null);

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
}