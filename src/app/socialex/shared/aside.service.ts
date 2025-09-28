import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideService {
  isAsideActiveService = signal(false);

  toggleAside() {
    this.isAsideActiveService.set(!this.isAsideActiveService());
  }
}
