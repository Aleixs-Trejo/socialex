import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interfaces
import { Latest } from '@socialex/music/interfaces/spotify-artist.interface';


@Component({
  selector: 'discography-card',
  imports: [RouterLink, NgOptimizedImage, TitleCasePipe],
  templateUrl: './discography-card.component.html',
})
export class DiscographyCardComponent {
  disc = input.required<Latest>();
  routeNavigate = input.required<string[]>();
  firstEl = input<boolean>(false);
}
