import { SearchCoursesController } from '@modules/courses/infra/http/controllers/search-courses.controller';
import { CoursesRepositoryModule } from '@modules/courses/providers/courses-repository.module';
import { SearchCoursesService } from '@modules/courses/services/search-courses.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoursesRepositoryModule],
  providers: [SearchCoursesService],
  controllers: [SearchCoursesController],
})
class SearchCoursesModule {}

export { SearchCoursesModule };
