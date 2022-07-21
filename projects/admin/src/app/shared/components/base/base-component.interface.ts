import { Language } from 'ngx-az-core';
import { Column } from '../grid/models/column.interface';

export interface IBaseComponent {
  /**
   *
   */
  columns: Column[];

  /**
   *
   */
  nzWidthConfig: string[];

  /**
   *
   */
  makeColumnsForGrid(): void;

  /**
   *
   */
  makeWidthConfig(languages?: Language[]): void;
}
