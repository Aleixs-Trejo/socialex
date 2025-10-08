// Angular 20
import { Component, effect, ElementRef, HostListener, inject, input } from '@angular/core';

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

  constructor() {
    effect(() => {
      const post = this.post();
      const currentUser = this.currentUser;
      if (!post || !currentUser) return;
  
      let userReaction: keyof Reactions | null = null;
      for (const key in post.reactions) {
        const type = key as keyof Reactions;
        if (post.reactions[type].some((r) => r.authorId === currentUser.id)) {
          userReaction = type;
          break;
        }
      }
  
      if (userReaction) {
        const reactionData = this.reactions.find((r) => r.type === userReaction);
        if (reactionData) this.uiService.setReactionData(post.id, reactionData);
      }
    });
  }

  get currentUser() {
    const user = this.authService.getCurrentUser();
    if (!user) throw new Error('No user found');
    return user;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) this.uiService.closeReactionAction();
  }

  clickReaction(type: keyof Reactions) {
    const postId = this.post().id;
    const authorId = this.currentUser.id;
    this.postsService.changeReaction(postId, type, authorId);
    const reactionTypeData = this.reactions.find((r) => r.type === type);
    if (reactionTypeData) this.uiService.setReactionForPost(postId, reactionTypeData);
    this.uiService.closeReactionAction();
  }
}