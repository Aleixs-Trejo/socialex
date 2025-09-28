import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideUsersComponent } from '@socialex/shared/aside-users/aside-users.component';
import { AsideService } from '@socialex/shared/aside.service';
import { AsideComponent } from '@socialex/shared/aside/aside.component';
import { FooterAsideComponent } from '@socialex/shared/footer-aside/footer-aside.component';
import { NavbarComponent } from '@socialex/shared/navbar/navbar.component';

@Component({
  selector: 'app-social-layout',
  imports: [
    RouterOutlet,
    NavbarComponent,
    AsideComponent,
    FooterAsideComponent,
    AsideUsersComponent,
  ],
  templateUrl: './social-layout.component.html',
})
export default class SocialLayoutComponent {
  asideService = inject(AsideService);
}
