import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appLimitComments',
})
export class LimitCommentsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
