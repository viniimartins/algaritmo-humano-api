import { Paginated } from '@modules/common/helpers/paginated';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace ISearchCourses {
  export type Request = Paginated.Params;

  export type Response = Paginated.Response<ICourseEntity>;
}

interface ISearchCoursesService {
  execute(params: ISearchCourses.Request): Promise<ISearchCourses.Response>;
}

export { ISearchCourses, ISearchCoursesService };
