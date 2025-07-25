import { FIND_COURSES_BY_USER_REPOSITORY_TOKEN } from '@modules/courses/constants';
import type {
  IFindCoursesByUser,
  IFindCoursesByUserService,
} from '@modules/courses/domain/services';
import type { IFindCoursesByUserRepository } from '@modules/courses/repositories/find-courses-by-user.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
class FindCoursesByUserService implements IFindCoursesByUserService {
  constructor(
    @Inject(FIND_COURSES_BY_USER_REPOSITORY_TOKEN)
    private findCoursesByUserRepository: IFindCoursesByUserRepository,
  ) {}

  async execute(
    params: IFindCoursesByUser.Request,
  ): Promise<IFindCoursesByUser.Response> {
    const { limit, page, filters, userId } = params;

    const courses = await this.findCoursesByUserRepository.findByUser({
      limit,
      page,
      filters,
      userId,
    });

    return courses;
  }
}

export { FindCoursesByUserService };
