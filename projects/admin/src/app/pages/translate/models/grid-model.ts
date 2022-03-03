export interface GridModel<T> {
  current_page: number;
  from: number;
  to: number;
  total: number;
  data: T[];
}
