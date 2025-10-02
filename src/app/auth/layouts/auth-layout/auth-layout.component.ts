// Angular 20
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { AuthCarouselComponent } from '@auth/components/auth-carousel/auth-carousel.component';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthCarouselComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
})
export default class AuthLayoutComponent {}