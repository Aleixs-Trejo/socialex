import { Component, ElementRef, HostListener, inject } from '@angular/core';

import { Reactions } from '@socialex/posts/interfaces/posts.interface';
import { UiStateService } from '@socialex/shared/services/ui-state.service';

const reactions = [
  { type: 'like', icon: 'assets/icon/like.svg', title: 'Me gusta' },
  { type: 'love', icon: 'assets/icon/love.svg', title: 'Me encanta' },
  { type: 'laugh', icon: 'assets/icon/laugh.svg', title: 'Me divierte' },
  { type: 'wow', icon: 'assets/icon/wow.svg', title: 'Me asombra' },
  { type: 'sad', icon: 'assets/icon/sad.svg', title: 'Me entristece' },
  { type: 'angry', icon: 'assets/icon/angry.svg', title: 'Me enoja' },
];

@Component({
  selector: 'reaction-action',
  imports: [],
  templateUrl: './reaction-action.component.html',
})
export class ReactionActionComponent {
  private elRef = inject(ElementRef);
  uiService = inject(UiStateService);

  reactions = reactions;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) this.uiService.closeReactionAction();
  }
}