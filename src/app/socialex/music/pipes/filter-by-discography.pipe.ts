import { Pipe, type PipeTransform } from '@angular/core';
import { Latest } from '../interfaces/spotify-artist.interface';

@Pipe({
  name: 'filterByDiscography',
})
export class FilterByDiscographyPipe implements PipeTransform {

  transform(value: Latest[], filterBy: string): Latest[] {
    if (!value) return [];
    if (!filterBy) return value;
    switch (filterBy) {
      case 'albums':
        return value.filter(item => item.type === 'ALBUM');
      case 'singles':
        return value.filter(item => item.type === 'SINGLE' || item.type === 'EP');
      default:
        return value;
    }
  }
}
