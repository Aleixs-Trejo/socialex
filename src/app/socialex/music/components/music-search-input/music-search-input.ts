// Angular
import { Component, signal } from '@angular/core';

// Components
import { ResultsSearchMusic } from "../results-search-music/results-search-music";

@Component({
  selector: 'music-search-input',
  imports: [ResultsSearchMusic],
  templateUrl: './music-search-input.html',
})
export class MusicSearchInput {
  query = signal('');

  inputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.query.set(value);
  }
}
