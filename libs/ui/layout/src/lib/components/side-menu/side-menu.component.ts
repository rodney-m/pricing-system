import { Component } from '@angular/core';

@Component({
  selector: 'pricing-system-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  isCollapsed = false; 

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
