export interface IColumn {
  /**
   *
   */
  field: string;

  /**
   * Header of column
   */
  header?: string;

  sortable?: boolean;
  sortByLocalCompare?: boolean;
  width?: string | null;

  /**
   * Attached to left
   */
  nzLeft?: boolean;

  /**
   * Attached to right
   */
  nzRight?: boolean;

  /**
   *
   */
  nzAlignHeader?: 'left' | 'right' | 'center';

  /**
   *
   */
  nzAlignBody?: 'left' | 'right' | 'center';

  /**
   * Indicates has temaplate for td of tbody
   */
  hasTemplate?: boolean;

  /**
   *
   */
  rowspan?: number | null;

  /**
   *
   */
  colspan?: number | null;

  /**
   * Defines extra column for thead(It does not used tbody)
   */
  isHeader?: boolean;

  /**
   * Index of row of thead. It starts from 1
   */
  row?: number;
}

export class Column implements IColumn {
  field: string;
  header: string;
  sortable: boolean;
  sortByLocalCompare: boolean;
  nzAlignHeader: 'left' | 'right' | 'center';
  nzAlignBody: 'left' | 'right' | 'center';
  width: string | null;
  nzLeft: boolean;
  nzRight: boolean;
  hasTemplate?: boolean | undefined;
  rowspan: number | null;
  colspan: number | null;
  isHeader: boolean;
  row: number;

  /**
   *
   */
  constructor(column: IColumn) {
    this.field = column.field;
    this.header = column.header ?? this.field;
    this.sortable = column.sortable ?? false;
    this.sortByLocalCompare = column.sortByLocalCompare ?? true;
    this.nzAlignHeader = column.nzAlignHeader ?? 'center';
    this.nzAlignBody = column.nzAlignBody ?? 'center';
    this.width = column.width ?? null;
    this.nzLeft = column.nzLeft ?? false;
    this.nzRight = column.nzRight ?? false;
    this.hasTemplate = column.hasTemplate;
    this.isHeader = column.isHeader ?? false;
    this.rowspan = column.rowspan ?? null;
    this.colspan = column.colspan ?? null;
    this.row = column.row ?? 1;
  }
}
