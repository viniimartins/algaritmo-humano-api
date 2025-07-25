import type { WithoutEntityBaseProperties } from '@modules/common/helpers/without-entity-base-properties';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';

namespace IUpdateCourse {
  export type Request = {
    id: string;
    data: WithoutEntityBaseProperties<ICourseEntity>;
  };

  export type Response = ICourseEntity;
}

interface IUpdateCourseService {
  execute(params: IUpdateCourse.Request): Promise<IUpdateCourse.Response>;
}

export { IUpdateCourse, type IUpdateCourseService };
