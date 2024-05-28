import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, ViewEncapsulation, inject } from '@angular/core';
import { environment } from '@env';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  icons = ICONS;
  environment = environment;

  @HostBinding('class') elementClass = 'row g-0';

  private document = inject(DOCUMENT);

  goToFooter(): void {
    this.document.querySelector('.site-footer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

const ICONS = {
  menu: faBars
}