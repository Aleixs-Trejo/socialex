import { Component, inject } from '@angular/core';
import { AsideService } from '../aside.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-aside',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
})
export class AsideComponent {
  asideService = inject(AsideService);
}