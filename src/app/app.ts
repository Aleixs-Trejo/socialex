import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Lenis
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  rootLenis = new Lenis();

  ngOnInit(): void {
    const animate = (time: number) => {
      this.rootLenis.raf(time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  ngOnDestroy(): void {
    this.rootLenis?.destroy();
  }
}
