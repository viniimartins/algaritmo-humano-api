import {
  DELETE_COURSE_REPOSITORY_TOKEN,
  FIND_COURSE_BY_ID_REPOSITORY_TOKEN,
} from '@modules/courses/constants';
import type {
  IDeleteCourse,
  IDeleteCourseService,
} from '@modules/courses/domain/services';
import type { IFindCourseByIdRepository } from '@modules/courses/repositories';
import type { IDeleteCourseRepository } from '@modules/courses/repositories/delete-course.repository';
import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
class DeleteCourseService implements IDeleteCourseService {
  constructor(
    @Inject(DELETE_COURSE_REPOSITORY_TOKEN)
    private deleteCourseRepository: IDeleteCourseRepository,

    @Inject(FIND_COURSE_BY_ID_REPOSITORY_TOKEN)
    private findCourseByIdRepository: IFindCourseByIdRepository,
  ) {}

  async execute(
    params: IDeleteCourse.Request,
  ): Promise<IDeleteCourse.Response> {
    const { id, userId } = params;

    const course = await this.findCourseByIdRepository.findById({ id });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    if (course.userId !== userId) {
      throw new ForbiddenException('You cannot delete this course');
    }

    return this.deleteCourseRepository.delete(params);
  }
}

export { DeleteCourseService };
