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

  /**
   *
   */
  theadRows: Array<Column[]> = [];

  /**
   *
   */
  ngOnInit(): void {
    this.makeTheadRows();
  }

  /**
   *
   */
  private makeTheadRows() {
    for (let rowIndex = 1; rowIndex <= 2; rowIndex++) {
      const columnsByRow = this.columns.filter(
        (column) => column.row === rowIndex
      );
      if (columnsByRow.length > 0) {
        this.theadRows.push(columnsByRow);
      }
    }
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.deleted.emit(id);
  }

  /**
   *
   * @param data
   */
  addEdit(data: NzSafeAny) {
    this.addEdited.emit(data);
  }
}
