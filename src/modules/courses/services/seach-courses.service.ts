import { SEARCH_COURSES_REPOSITORY_TOKEN } from '@modules/courses/constants';
import type { ISearchCoursesService } from '@modules/courses/domain/services';
import type {
  ISearchCourse,
  ISearchCourseRepository,
} from '@modules/courses/repositories';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
class SearchCoursesService implements ISearchCoursesService {
  constructor(
    @Inject(SEARCH_COURSES_REPOSITORY_TOKEN)
    private searchCoursesRepository: ISearchCourseRepository,
  ) {}

  async execute(
    params: ISearchCourse.Request,
  ): Promise<ISearchCourse.Response> {
    const { limit, page } = params;

    const courses = await this.searchCoursesRepository.search({
      limit,
      page,
    });

    return courses;
  }
}

export { SearchCoursesService };
