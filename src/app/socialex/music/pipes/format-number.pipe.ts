import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({name: 'formatNumber'})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined || isNaN(value)) return '';
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let suffixIndex = 0;

    while (value >= 1000 && suffixIndex < suffixes.length - 1) {
      value /= 1000;
      suffixIndex++;
    }

    const formattedValue = value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);

    return `${formattedValue}${suffixes[suffixIndex]}`;
  }
}
