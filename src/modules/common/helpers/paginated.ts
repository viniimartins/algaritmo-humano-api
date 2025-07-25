namespace Paginated {
  export type Params = {
    page: number;
    limit: number;
    search?: string;
    sort?: string[];
    filters?: string[];
  };

  export type Response<T> = {
    data: T[];
    total: number;
    pages: number;
  };
}

export { Paginated };
