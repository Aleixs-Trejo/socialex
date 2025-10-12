import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({name: 'formatMilliseconds'})
export class FormatMillisecondsPipe implements PipeTransform {
  transform(miliseconds: number): string {
    const minutes = Math.floor(miliseconds / 60000);
    const seconds = Math.floor((miliseconds / 1000) % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
