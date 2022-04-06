export interface Column {
  field: string;
  header: string;
  sortable?: boolean;
  sortByLocalCompare?: boolean;
  width?: string;
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
  nzAlignBody?: 'left' | 'right' | 'center';

  /**
   *
   */
  hasTemplate?: boolean;
}
