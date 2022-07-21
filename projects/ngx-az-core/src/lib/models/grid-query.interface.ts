export interface GridQuery {
  pageIndex: number;
  pageSize: number;
  sortField: string | '';
  sortOrder: string | '';
  filter: Array<{ key: string; value: string[] }>;
}
