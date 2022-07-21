import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(user: any): string {
    if (!user) {
      return '';
    }

    if (!user.s_name) {
      return [user.f_name, user.l_name].join(' ');
    }

    return [user.f_name, user.l_name, user.s_name].join(' ');
  }
}
