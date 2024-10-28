export interface IResponse<T = any> {
  code: number;
  success: boolean;
  data: T;
}

export interface IResponseList<T = any, K extends string = 'items'> {
  code: number;
  success: boolean;
  data: {
    page: number;
    pages: number;
    total: number;
  } & Record<K, T[]>;
}