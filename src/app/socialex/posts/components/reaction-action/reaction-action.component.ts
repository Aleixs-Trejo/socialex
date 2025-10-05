// Angular 20
import { Component, ElementRef, HostListener, inject, input } from '@angular/core';

// Services
import { AuthService } from '@auth/services/auth.service';
import { PostsService } from '@socialex/posts/services/posts.service';
import { UiStateService } from '@socialex/shared/services/ui-state.service';

// Interfaces
import { Post, Reactions } from '@socialex/posts/interfaces/posts.interface';

// Data
import { reactions } from '@socialex/posts/data/reactions.data';


@Component({
  selector: 'reaction-action',
  imports: [],
  templateUrl: './reaction-action.component.html',
})
export class ReactionActionComponent {
  authService = inject(AuthService);
  postsService = inject(PostsService);
  private elRef = inject(ElementRef);
  uiService = inject(UiStateService);

  post = input.required<Post>();

  reactions = reactions;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) this.uiService.closeReactionAction();
  }

  clickReaction(type: keyof Reactions) {
    this.postsService.changeReaction(this.post()!.id, type, this.authService.getCurrentUser()!.id);
    const reactionTypeData = this.reactions.find((r) => r.type === type) || null;
    this.uiService.reactionData.set(reactionTypeData);
    this.uiService.closeReactionAction();
  }
}