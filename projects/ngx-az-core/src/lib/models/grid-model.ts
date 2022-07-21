export interface GridModel<T> {
  current_page: number;
  per_page: number;
  total: number;
  data: T[];
}
