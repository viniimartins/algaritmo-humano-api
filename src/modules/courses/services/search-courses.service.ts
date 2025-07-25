import { SEARCH_COURSES_REPOSITORY_TOKEN } from '@modules/courses/constants';
import type {
  ISearchCourses,
  ISearchCoursesService,
} from '@modules/courses/domain/services';
import type { ISearchCourseRepository } from '@modules/courses/repositories/search-courses.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
class SearchCoursesService implements ISearchCoursesService {
  constructor(
    @Inject(SEARCH_COURSES_REPOSITORY_TOKEN)
    private searchCoursesRepository: ISearchCourseRepository,
  ) {}

  async execute(
    params: ISearchCourses.Request,
  ): Promise<ISearchCourses.Response> {
    const { limit, page, filters } = params;

    const courses = await this.searchCoursesRepository.search({
      limit,
      page,
      filters,
    });

    return courses;
  }
}

export { SearchCoursesService };
