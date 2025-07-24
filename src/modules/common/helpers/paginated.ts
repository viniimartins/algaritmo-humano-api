namespace Paginated {
  export type Params = {
    page: number;
    limit: number;
  };

  export type Response<T> = {
    data: T[];
    total: number;
    pages: number;
  };
}

export { Paginated };
