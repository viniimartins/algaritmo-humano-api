import { Paginated } from '@modules/common/helpers/paginated';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace ISearchCourse {
  export type Params = Paginated.Params;

  export type Response = Paginated.Response<ICourseEntity>;
}

interface ISearchCourseRepository {
  search: (params: ISearchCourse.Params) => Promise<ISearchCourse.Response>;
}

export { ISearchCourse, ISearchCourseRepository };
