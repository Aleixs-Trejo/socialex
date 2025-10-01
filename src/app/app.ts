import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LenisService } from '@socialex/shared/services/lenis.service';

// Lenis
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private rootLenis = new Lenis();
  private lenisService = inject(LenisService);

  ngOnInit(): void {
    this.lenisService.setLenis(this.rootLenis);
    const animate = (time: number) => {
      this.rootLenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  ngOnDestroy(): void {
    this.rootLenis?.destroy();
    this.lenisService.destroy();
  }
}
