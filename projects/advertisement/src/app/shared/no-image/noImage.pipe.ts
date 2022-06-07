import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage',
})
export class NoImagePipe implements PipeTransform {
  transform(src: string | null | undefined): any {
    if (src) {
      return src;
    }
    return './assets/images/default-card-img.jpg';
  }
}
