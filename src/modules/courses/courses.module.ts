import { Module } from '@nestjs/common';

import { CreateCourseModule } from './infra/http/modules/create-course.module';
import { SearchCoursesModule } from './infra/http/modules/search-courses.module';
import { UpdateCourseModule } from './infra/http/modules/update-course.module';

@Module({
  imports: [CreateCourseModule, SearchCoursesModule, UpdateCourseModule],
})
class CoursesModule {}

export { CoursesModule };
