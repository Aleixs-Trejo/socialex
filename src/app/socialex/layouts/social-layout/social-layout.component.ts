// Angular 20
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Services
import { AsideService } from '@socialex/shared/services/aside.service';

// Components
import { AsideUsersComponent } from '@socialex/shared/aside-users/aside-users.component';
import { AsideComponent } from '@socialex/shared/aside/aside.component';
import { FooterAsideComponent } from '@socialex/shared/footer-aside/footer-aside.component';
import { NavbarComponent } from '@socialex/shared/navbar/navbar.component';
import { AuthService } from '@auth/services/auth.service';

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
  authService = inject(AuthService);
  asideService = inject(AsideService);
}
