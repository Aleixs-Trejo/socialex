// Angular
import { AfterViewInit, Component, computed, effect, ElementRef, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Interfaces | Types
import { User } from '@socialex/interfaces/user.interface';
import { FilterUsersStatus } from '@socialex/types/filter-users-status.type';

// Pipes
import { FilterAsideUsersByPipe } from '@socialex/pipes/filter-aside-users-by.pipe';
import { SearchUserByPipe } from '@socialex/pipes/search-user-by.pipe';

// Data
import { usersData } from '@socialex/data/users.data';

// Lenis
import Lenis from 'lenis';

@Component({
  selector: 'aside-users',
  imports: [
    RouterLink,
    RouterLinkActive,
    FilterAsideUsersByPipe,
    SearchUserByPipe,
  ],
  templateUrl: './aside-users.component.html',
})
export class AsideUsersComponent implements AfterViewInit {
  private userLenis?: Lenis;
  contentWrapper = viewChild.required<ElementRef>('lenisWrapper');

  users = signal<User[]>(usersData);

  searchQuery = signal('');
  debouncedSearch = signal('');
  filterBy = signal<FilterUsersStatus>('all');

  filteredUsers = computed(() =>
    this.users()
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

  ngAfterViewInit(): void {
    this.initUsersLenis();
    const animate = (time: number) => {
      this.userLenis?.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  initUsersLenis() {
    const wrapperEl  = this.contentWrapper()?.nativeElement;
    if (!wrapperEl ) return;

    this.userLenis = new Lenis({
      wrapper: wrapperEl ,
      content: wrapperEl.firstElementChild as HTMLElement,
    });
  }

  ngOnDestroy(): void {
    this.userLenis?.destroy();
  }
}
