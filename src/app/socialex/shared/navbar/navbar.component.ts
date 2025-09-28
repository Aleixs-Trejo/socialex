import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import socialexRoutes from '@socialex/socialex.routes';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  links = socialexRoutes
    .map(route => route.children ?? [])
    .map(route => route.slice(0, 3))
    .flat()
    .filter(route => !route.path?.includes(':'))
    .filter((route) => route.path !== '**');
}
