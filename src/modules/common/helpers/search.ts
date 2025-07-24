import { Paginated } from './paginated';

interface SearchParams extends Paginated.Params {}

interface ISearch<E> {
  execute(params: SearchParams): Promise<Paginated.Response<E>>;
}

export { ISearch, SearchParams };
