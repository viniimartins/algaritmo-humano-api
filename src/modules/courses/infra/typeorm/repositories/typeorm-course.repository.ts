import { Search } from '@modules/common/infra/typeorm/helpers/search';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';
import { TypeORMCourseEntity } from '@modules/courses/infra/typeorm/entities/typeorm-course.entity';
import type {
  ICreateCourse,
  ICreateCourseRepository,
  ISearchCourse,
  ISearchCourseRepository,
} from '@modules/courses/repositories';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

@Injectable()
class TypeORMCourseRepository
  implements ICreateCourseRepository, ISearchCourseRepository
{
  constructor(
    @InjectRepository(TypeORMCourseEntity)
    private readonly repository: Repository<TypeORMCourseEntity>,
  ) {}

  async create(params: ICreateCourse.Params): Promise<ICreateCourse.Response> {
    const course = this.repository.create(params);
    await this.repository.save(course);

    return course;
  }

  async search(params: ISearchCourse.Request): Promise<ISearchCourse.Response> {
    const query = this.repository.createQueryBuilder();

    const search = new Search<ICourseEntity>(query);

    return search.execute({
      page: params.page,
      limit: params.limit,
    });
  }
}

export { TypeORMCourseRepository };
