import { FindCoursesByUserController } from '@modules/courses/infra/http/controllers/find-courses-by-user.controller';
import { CoursesRepositoryModule } from '@modules/courses/providers/courses-repository.module';
import { FindCoursesByUserService } from '@modules/courses/services/find-courses-by-user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoursesRepositoryModule],
  providers: [FindCoursesByUserService],
  controllers: [FindCoursesByUserController],
})
class FindCoursesByUserModule {}

export { FindCoursesByUserModule };
