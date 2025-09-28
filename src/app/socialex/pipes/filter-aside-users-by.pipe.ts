import { Pipe, type PipeTransform } from '@angular/core';
import { User } from '@socialex/interfaces/user.interface';
import { FilterUsersStatus } from '@socialex/types/filter-users-status.type';

@Pipe({
  name: 'filterAsideUsersBy',
})
export class FilterAsideUsersByPipe implements PipeTransform {

  transform(value: User[], filterBy: FilterUsersStatus): User[] {
    if (!filterBy) return value;

    const condition = filterBy.trim().toLowerCase();

    switch (condition) {
      case 'all':
        return value;
      case 'online':
        return value.filter(user => user.status === 'online');
      case 'offline':
        return value.filter(user => user.status === 'offline');
      default:
        return value;
    }
  }
}
