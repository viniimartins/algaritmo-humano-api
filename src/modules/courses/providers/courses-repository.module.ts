import {
  CREATE_COURSE_REPOSITORY_TOKEN,
  SEARCH_COURSES_REPOSITORY_TOKEN,
} from '@modules/courses/constants';
import { TypeORMCourseEntity } from '@modules/courses/infra/typeorm/entities/typeorm-course.entity';
import { TypeORMCourseRepository } from '@modules/courses/infra/typeorm/repositories/typeorm-course.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeORMCourseEntity])],
  providers: [
    {
      provide: CREATE_COURSE_REPOSITORY_TOKEN,
      useClass: TypeORMCourseRepository,
    },
    {
      provide: SEARCH_COURSES_REPOSITORY_TOKEN,
      useClass: TypeORMCourseRepository,
    },
  ],
  exports: [CREATE_COURSE_REPOSITORY_TOKEN, SEARCH_COURSES_REPOSITORY_TOKEN],
})
class CoursesRepositoryModule {}

export { CoursesRepositoryModule };
