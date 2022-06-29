import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drawerWidth',
})
export class DrawerWidthPipe implements PipeTransform {
  transform(value: boolean): string {
    if (!value) {
      return '280px';
    }

    let clientWidth = window.innerWidth;
    clientWidth = clientWidth * 0.65;

    if (clientWidth < 1200) {
      return '280px';
    }

    if (clientWidth > 1355) {
      clientWidth = 1355;
    }
    return `${clientWidth}px`;
  }
}
