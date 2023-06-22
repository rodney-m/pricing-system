import { Component } from '@angular/core';

@Component({
  selector: 'pricing-system-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  visible!: boolean;

  logOut() {
    sessionStorage.clear();
    location.reload();
  }

  toggle(visible:boolean):void{ this.visible = visible}
}
