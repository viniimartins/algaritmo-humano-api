import type { WithoutEntityBaseProperties } from '@modules/common/helpers/without-entity-base-properties';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace ICreateCourse {
  export type Params = WithoutEntityBaseProperties<ICourseEntity> & {
    userId: string;
  };

  export type Response = ICourseEntity;
}

interface ICreateCourseRepository {
  create: (params: ICreateCourse.Params) => Promise<ICreateCourse.Response>;
}

export { ICreateCourse, type ICreateCourseRepository };
