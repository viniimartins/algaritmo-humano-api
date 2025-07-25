import type { IBaseEntity } from '@modules/common/domain/entities/base.entity';
import type { CourseStatus } from '@modules/courses/constants';

interface ICourseEntity extends IBaseEntity {
  title: string;
  description: string;
  image: string;
  duration: string;
  status: CourseStatus | undefined;
}

export type { ICourseEntity };
