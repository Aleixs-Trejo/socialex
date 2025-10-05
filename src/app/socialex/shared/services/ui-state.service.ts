import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UiStateService {

  showReactionAction = signal<string | null>(null);


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