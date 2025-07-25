import {
  FIND_COURSE_BY_ID_REPOSITORY_TOKEN,
  UPDATE_COURSE_REPOSITORY_TOKEN,
} from '@modules/courses/constants';
import type {
  IUpdateCourse,
  IUpdateCourseService,
} from '@modules/courses/domain/services';
import type {
  IFindCourseByIdRepository,
  IUpdateCourseRepository,
} from '@modules/courses/repositories';
import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
class UpdateCourseService implements IUpdateCourseService {
  constructor(
    @Inject(UPDATE_COURSE_REPOSITORY_TOKEN)
    private updateCourseRepository: IUpdateCourseRepository,

    @Inject(FIND_COURSE_BY_ID_REPOSITORY_TOKEN)
    private findCourseByIdRepository: IFindCourseByIdRepository,
  ) {}

  async execute(
    params: IUpdateCourse.Request,
  ): Promise<IUpdateCourse.Response> {
    const { id, data } = params;

    const course = await this.findCourseByIdRepository.findById({ id });

    if (!course) throw new NotFoundException('Course not found');

    if (course.userId !== data.userId)
      throw new ForbiddenException('You cannot update this course');

    return this.updateCourseRepository.update(params);
  }
}

export { UpdateCourseService };
