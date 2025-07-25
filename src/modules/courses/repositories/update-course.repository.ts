import type { WithoutEntityBaseProperties } from '@modules/common/helpers/without-entity-base-properties';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace IUpdateCourse {
  export type Params = {
    id: string;
    data: WithoutEntityBaseProperties<ICourseEntity>;
  };

  export type Response = ICourseEntity;
}

interface IUpdateCourseRepository {
  update: (params: IUpdateCourse.Params) => Promise<IUpdateCourse.Response>;
}

export { IUpdateCourse, type IUpdateCourseRepository };
