import { Search } from '@modules/common/infra/typeorm/helpers/search';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';
import { TypeORMCourseEntity } from '@modules/courses/infra/typeorm/entities/typeorm-course.entity';
import type {
  ICreateCourse,
  ICreateCourseRepository,
  IDeleteCourse,
  IDeleteCourseRepository,
  IFindCourseById,
  IFindCourseByIdRepository,
  ISearchCourse,
  ISearchCourseRepository,
  IUpdateCourse,
  IUpdateCourseRepository,
} from '@modules/courses/repositories';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

@Injectable()
class TypeORMCourseRepository
  implements
    ICreateCourseRepository,
    ISearchCourseRepository,
    IUpdateCourseRepository,
    IFindCourseByIdRepository,
    IDeleteCourseRepository
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

  async search(params: ISearchCourse.Params): Promise<ISearchCourse.Response> {
    const query = this.repository.createQueryBuilder();

    const search = new Search<ICourseEntity>(query);

    return search.execute({
      page: params.page,
      limit: params.limit,
    });
  }

  async update(params: IUpdateCourse.Params): Promise<IUpdateCourse.Response> {
    return this.repository.save({ id: params.id, ...params.data });
  }

  async findById(
    params: IFindCourseById.Params,
  ): Promise<IFindCourseById.Response> {
    const course = await this.repository.findOneBy({ id: params.id });

    return course;
  }

  async delete(params: IDeleteCourse.Params): Promise<IDeleteCourse.Response> {
    await this.repository.delete({ id: params.id });
  }
}

export { TypeORMCourseRepository };
