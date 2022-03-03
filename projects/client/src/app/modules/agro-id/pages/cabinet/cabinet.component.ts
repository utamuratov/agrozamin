import { Component } from '@angular/core';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.less'],
})
export class CabinetComponent {
  menuFixed = false;
  isCollapsed = false;

  handleSidebarStyles($event: any): void {
    this.menuFixed = $event;
  }
}
