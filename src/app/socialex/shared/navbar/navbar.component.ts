// Angular
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Services
import { AuthService } from '@auth/services/auth.service';

// Routes
import socialexRoutes from '@socialex/socialex.routes';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  authService = inject(AuthService);

  private baseLinks = socialexRoutes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => !route.path?.includes(':'))
    .filter(route => route.path !== '**')
    .filter(route => route !== undefined)
    .slice(0, 2);

  links = computed(() => {
    if (this.authService.authStatus() === 'authenticated') return this.baseLinks;
    return this.baseLinks.slice(0, 1);
  })
}
