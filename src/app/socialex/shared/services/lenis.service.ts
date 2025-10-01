import { Injectable } from '@angular/core';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root'
})
export class LenisService {
  private lenis!: Lenis;

  setLenis(lenis: Lenis) {
    this.lenis = lenis;
  }

  stopScroll() {
    this.lenis?.stop();
  }

  startScroll() {
    this.lenis?.start();
  }

  destroy() {
    this.lenis?.destroy();
  }
}