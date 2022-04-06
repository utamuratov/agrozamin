import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Column } from './models/column.interface';

@Component({
  selector: 'az-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less'],
})
export class GridComponent implements OnInit {
  /**
   *
   */
  @Input()
  data: NzSafeAny[] = [];

  /**
   *
   */
  @Input()
  columns: Column[] = [];

  /**
   *
   */
  @Output()
  deleted = new EventEmitter<number>();

  /**
   *
   */
  @Output()
  addEdited = new EventEmitter<NzSafeAny>();

  /**
   *
   */
  @Input()
  columnTemplate!: TemplateRef<NzSafeAny>;

  constructor() {}

  ngOnInit() {}

  delete(id: number) {
    this.deleted.emit(id);
  }

  addEdit(data: NzSafeAny) {
    this.addEdited.emit(data);
  }

  makeValue(field: string, data: any) {
    const splitted = field.split('.');
    if (splitted.length === 0) {
      return '';
    }
    let value = data[splitted[0]];
    for (let index = 1; index < splitted.length; index++) {
      value = value[splitted[index]];
    }
    return value;
  }
}
