import { CREATE_COURSE_REPOSITORY_TOKEN } from '@modules/courses/constants';
import type {
  ICreateCourse,
  ICreateCourseService,
} from '@modules/courses/domain/services';
import type { ICreateCourseRepository } from '@modules/courses/repositories';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
class CreateCourseService implements ICreateCourseService {
  constructor(
    @Inject(CREATE_COURSE_REPOSITORY_TOKEN)
    private createCourseRepository: ICreateCourseRepository,
  ) {}

  async execute(
    params: ICreateCourse.Request,
  ): Promise<ICreateCourse.Response> {
    const { title, description, image, duration, status, userId } = params;

    const course = await this.createCourseRepository.create({
      title,
      description,
      duration,
      image,
      status,
      userId,
    });

    return course;
  }
}

export { CreateCourseService };
