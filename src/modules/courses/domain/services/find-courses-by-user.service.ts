import { Paginated } from '@modules/common/helpers/paginated';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace IFindCoursesByUser {
  export type Request = Paginated.Params & {
    userId: string;
  };

  export type Response = Paginated.Response<ICourseEntity>;
}

interface IFindCoursesByUserService {
  execute(
    params: IFindCoursesByUser.Request,
  ): Promise<IFindCoursesByUser.Response>;
}

export { IFindCoursesByUser, IFindCoursesByUserService };
