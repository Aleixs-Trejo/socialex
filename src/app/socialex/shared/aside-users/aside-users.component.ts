// Angular
import { AfterViewInit, Component, computed, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Interfaces | Types
import { User } from '@socialex/users/interfaces/user.interface';
import { FilterUsersStatus } from '@socialex/types/filter-users-status.type';

// Pipes
import { FilterAsideUsersByPipe } from '@socialex/pipes/filter-aside-users-by.pipe';
import { SearchUserByPipe } from '@socialex/pipes/search-user-by.pipe';
import { TitleCasePipe } from '@angular/common';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'aside-users',
  imports: [
    RouterLink,
    RouterLinkActive,
    FilterAsideUsersByPipe,
    SearchUserByPipe,
    TitleCasePipe
  ],
  templateUrl: './aside-users.component.html',
})
export class AsideUsersComponent {
  authService = inject(AuthService);

  searchQuery = signal('');
  debouncedSearch = signal('');
  filterBy = signal<FilterUsersStatus>('all');

  btnsOptions: FilterUsersStatus[] = ['all', 'online', 'offline'];

  filteredUsers = computed(() =>
    this.authService.allUsersAndAuthUsers()
      .filter((u) =>
        this.filterBy() === 'all' ? true : u.status === this.filterBy()
      )
      .filter((u) =>
        this.searchQuery()
          ? u.name
              .toLocaleLowerCase()
              .includes(this.searchQuery().toLocaleLowerCase()) ||
            u.profession
              .toLocaleLowerCase()
              .includes(this.searchQuery().toLocaleLowerCase())
          : true
      )
  );

  filteredUsersDebounced = signal<User[]>([]);

  debounceTime = 500;

  debounceEffect = effect((onCleanUp) => {
    const valueInput = this.searchQuery();
    const timeout = setTimeout(
      () => {
        this.filteredUsersDebounced.set(this.filteredUsers());
        this.debouncedSearch.set(valueInput);
      },
      this.debounceTime
    );

    onCleanUp(() => clearTimeout(timeout));
  });
}
