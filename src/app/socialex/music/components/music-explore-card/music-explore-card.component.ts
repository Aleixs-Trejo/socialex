import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from "@angular/common";
import { ExploreMusic } from '@socialex/music/mapper/music.mapper';

@Component({
  selector: 'music-explore-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './music-explore-card.component.html',
})
export class MusicExploreCardComponent {
  music = input.required<ExploreMusic>();
  routeNavigate = input.required<string[]>();
}