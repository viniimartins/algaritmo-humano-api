import { Module } from '@nestjs/common';

import { CreateCourseModule } from './infra/http/modules/create-course.module';
import { DeleteCourseModule } from './infra/http/modules/delete-course.module';
import { FindCoursesByUserModule } from './infra/http/modules/find-courses-by-user.module';
import { SearchCoursesModule } from './infra/http/modules/search-courses.module';
import { UpdateCourseModule } from './infra/http/modules/update-course.module';

@Module({
  imports: [
    CreateCourseModule,
    SearchCoursesModule,
    UpdateCourseModule,
    DeleteCourseModule,
    FindCoursesByUserModule,
  ],
})
class CoursesModule {}

export { CoursesModule };
