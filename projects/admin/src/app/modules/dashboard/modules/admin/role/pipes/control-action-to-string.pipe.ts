import { Pipe, PipeTransform } from '@angular/core';
import { AccessAction } from '../models/access-action.interface';

@Pipe({
  name: 'controlActionToString',
})
export class ControlActionToStringPipe implements PipeTransform {
  transform(value: AccessAction[]): string {
    return value.map((action) => action.description).join(', ');
  }
}
