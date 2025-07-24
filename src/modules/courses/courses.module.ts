import { Module } from '@nestjs/common';

import { CreateCourseModule } from './infra/http/modules/create-course.module';
import { SearchCoursesModule } from './infra/http/modules/search-courses.module';

@Module({
  imports: [CreateCourseModule, SearchCoursesModule],
})
class CoursesModule {}

export { CoursesModule };
