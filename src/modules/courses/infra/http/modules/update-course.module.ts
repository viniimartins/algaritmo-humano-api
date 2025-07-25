import { UpdateCourseController } from '@modules/courses/infra/http/controllers/update-course.controller';
import { CoursesRepositoryModule } from '@modules/courses/providers/courses-repository.module';
import { UpdateCourseService } from '@modules/courses/services/update-course.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoursesRepositoryModule],
  providers: [UpdateCourseService],
  controllers: [UpdateCourseController],
})
class UpdateCourseModule {}

export { UpdateCourseModule };
