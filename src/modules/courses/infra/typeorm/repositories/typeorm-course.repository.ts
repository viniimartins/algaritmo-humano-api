import { TypeORMCourseEntity } from '@modules/courses/infra/typeorm/entities/typeorm-course.entity';
import type {
  ICreateCourse,
  ICreateCourseRepository,
} from '@modules/courses/repositories';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

@Injectable()
class TypeORMCourseRepository implements ICreateCourseRepository {
  constructor(
    @InjectRepository(TypeORMCourseEntity)
    private readonly repository: Repository<TypeORMCourseEntity>,
  ) {}

  async create(params: ICreateCourse.Params): Promise<ICreateCourse.Response> {
    const course = this.repository.create(params);
    await this.repository.save(course);

    return course;
  }
}

export { TypeORMCourseRepository };
