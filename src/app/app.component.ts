import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { WINDOW } from '@shared/injection-tokens';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet/>
  `
})
export class AppComponent {

  private router = inject(Router);
  private window = inject(WINDOW);
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(() => this.window.scrollTo(0,0));
  }

}
