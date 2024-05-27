import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, ViewEncapsulation, inject } from '@angular/core';
import { environment } from '@env';
import { SidebarService } from '@shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  environment = environment;

  @HostBinding('class') elementClass = 'row g-0';

  private document = inject(DOCUMENT);

  private sidebarService = inject(SidebarService);

  toggleSidebar() {
    this.sidebarService.setMenuStatus();
  }

  goToFooter(): void {
    console.log('goto', this.document.querySelector('.site-footer'))
    this.document.querySelector('.site-footer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
