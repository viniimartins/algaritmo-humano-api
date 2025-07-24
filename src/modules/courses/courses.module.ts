import { Module } from '@nestjs/common';

import { CreateCourseModule } from './infra/http/modules/create-course.module';

@Module({
  imports: [CreateCourseModule],
})
class CoursesModule {}

export { CoursesModule };
