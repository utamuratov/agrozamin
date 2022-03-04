export interface GridModel<T> {
  current_page: number;
  from: number;
  to: number;
  total: number;
  page: number;
  per_page: number;
  data: T[];
}
