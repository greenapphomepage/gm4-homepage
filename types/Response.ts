export interface Response<T> {
  code: number;
  success: boolean;
  data: T;
}
