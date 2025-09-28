import { Pipe, type PipeTransform } from '@angular/core';
import { User } from '@socialex/users/interfaces/user.interface';

@Pipe({
  name: 'searchUserBy',
})
export class SearchUserByPipe implements PipeTransform {
  transform(value: User[], searchQuery: string): User[] {
    if (!searchQuery) return value;

    const condition = searchQuery.trim().toLowerCase();

    return value.filter(
      (user) =>
        user.name.toLowerCase().includes(condition) ||
        user.profession.toLowerCase().includes(condition)
    );
  }
}
