import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(user: any): string {
    if (!user) {
      return '';
    }

    return [user.f_name, user.l_name, user.s_name].join(' ');
  }
}
