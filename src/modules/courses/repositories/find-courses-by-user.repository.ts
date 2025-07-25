import { Paginated } from '@modules/common/helpers/paginated';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace IFindCoursesByUser {
  export type Params = Paginated.Params & {
    userId: string;
  };

  export type Response = Paginated.Response<ICourseEntity>;
}

interface IFindCoursesByUserRepository {
  findByUser: (
    params: IFindCoursesByUser.Params,
  ) => Promise<IFindCoursesByUser.Response>;
}

export { IFindCoursesByUser, IFindCoursesByUserRepository };
