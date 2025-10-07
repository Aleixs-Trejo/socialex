// Angular 20
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Pipes
import { PostDatePipe } from '@socialex/posts/pipes/post-date.pipe';

// Interfaces
import { Post } from '@socialex/posts/interfaces/posts.interface';

@Component({
  selector: 'post-card-content',
  imports: [RouterLink, PostDatePipe],
  templateUrl: './post-card-content.component.html',
})
export class PostCardContentComponent {
  userResource = input.required<any>();
  post = input.required<Post>();
}
