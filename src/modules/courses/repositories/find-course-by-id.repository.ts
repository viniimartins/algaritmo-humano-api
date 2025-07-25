import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace IFindCourseById {
  export type Params = {
    id: string;
  };

  export type Response = ICourseEntity | null;
}

interface IFindCourseByIdRepository {
  findById: (
    params: IFindCourseById.Params,
  ) => Promise<IFindCourseById.Response>;
}

export { IFindCourseById, type IFindCourseByIdRepository };
