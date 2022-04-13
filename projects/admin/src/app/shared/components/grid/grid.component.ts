import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Column } from './models/column.interface';

@Component({
  selector: 'az-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  /**
   *
   */
  @Input()
  data: NzSafeAny[] = [];

  /**
   *
   */
  @Input()
  nzWidthConfig!: string[];

  /**
   *
   */
  private _columns: Column[] = [];
  public get columns(): Column[] {
    return this._columns;
  }
  @Input()
  public set columns(v: Column[]) {
    this._columns = v;
    this.theadRows = this.getTheadRows([]);
  }

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
  private getTheadRows(theadRows: Array<Column[]>) {
    for (let rowIndex = 1; rowIndex <= 2; rowIndex++) {
      const columnsByRow = this.columns.filter(
        (column) => column.row === rowIndex
      );
      if (columnsByRow.length > 0) {
        theadRows.push(columnsByRow);
      }
    }

    return theadRows;
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
