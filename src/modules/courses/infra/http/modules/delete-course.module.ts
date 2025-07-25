import { DeleteCourseController } from '@modules/courses/infra/http/controllers/delete-course.controller';
import { CoursesRepositoryModule } from '@modules/courses/providers/courses-repository.module';
import { DeleteCourseService } from '@modules/courses/services/delete-course.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoursesRepositoryModule],
  providers: [DeleteCourseService],
  controllers: [DeleteCourseController],
})
class DeleteCourseModule {}

export { DeleteCourseModule };
