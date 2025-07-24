import type { Paginated } from '@modules/common/helpers/paginated';
import type { ISearch, SearchParams } from '@modules/common/helpers/search';
import { SelectQueryBuilder } from 'typeorm';

class Search<E extends object> implements ISearch<E> {
  constructor(private query: SelectQueryBuilder<E>) {}

  async execute(params: SearchParams): Promise<Paginated.Response<E>> {
    const offset = (params.page - 1) * params.limit;

    const [data, total] = await this.query
      .skip(offset)
      .take(params.limit)
      .getManyAndCount();

    const pages = Math.ceil(total / params.limit);

    return { data, total, pages };
  }
}

export { Search };
