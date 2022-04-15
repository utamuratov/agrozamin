import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: any = ''): any {
    if (!search.trim()) {
      return value
    }
    return value.filter((e: any) => {
      return e.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
