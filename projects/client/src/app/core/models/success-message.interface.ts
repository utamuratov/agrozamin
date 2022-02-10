export interface SuccessMessage<T = unknown> {
  success: boolean;
  data: T;
}
