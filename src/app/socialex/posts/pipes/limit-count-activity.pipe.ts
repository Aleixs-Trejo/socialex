import { Pipe, type PipeTransform } from '@angular/core';
import { User } from '@socialex/users/interfaces/user.interface';

@Pipe({
  name: 'limitCountActivity',
})
export class LimitCountActiPipe implements PipeTransform {
  transform(users: User[] = [], limit = 5): {name: string}[] {
    if (!users || users.length === 0) return [];
    const total = users.length;

    if (total <= limit) {
      return users.map((u) => ({ name: u.name }));
    }

    const visibles = users.slice(0, limit).map((u) => ({ name: u.name }));
    const restantes = total - limit;
    visibles.push({ name: `y ${restantes} persona${restantes > 1 ? 's': ''} más` });
    return visibles;
  }
}
