import { CreateCourseController } from '@modules/courses/infra/http/controllers/create-course.controller';
import { CoursesRepositoryModule } from '@modules/courses/providers/courses-repository.module';
import { CreateCourseService } from '@modules/courses/services/create-course.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoursesRepositoryModule],
  providers: [CreateCourseService],
  controllers: [CreateCourseController],
})
class CreateCourseModule {}

export { CreateCourseModule };
