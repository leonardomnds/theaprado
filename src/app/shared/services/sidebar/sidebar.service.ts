import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { faPrint } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private menuToggleEvent = new BehaviorSubject<boolean>(true);

  getMenuStatus() {
    return this.menuToggleEvent.asObservable();
  }

  setMenuStatus(isOpenned?: boolean) {
    let shouldOpen: boolean;

    if (isOpenned !== undefined) {
      shouldOpen = isOpenned.valueOf();
    } else {
      shouldOpen = !this.menuToggleEvent.value;
    }

    this.menuToggleEvent.next(shouldOpen);
  }
}
