import type { WithoutEntityBaseProperties } from '@modules/common/helpers/without-entity-base-properties';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace ICreateCourse {
  export type Request = WithoutEntityBaseProperties<ICourseEntity> & {
    userId: string;
  };

  export type Response = ICourseEntity;
}

interface ICreateCourseService {
  execute(params: ICreateCourse.Request): Promise<ICreateCourse.Response>;
}

export { ICreateCourse, type ICreateCourseService };
