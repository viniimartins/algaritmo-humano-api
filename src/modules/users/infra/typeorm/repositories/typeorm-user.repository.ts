import { TypeORMUserEntity } from '@modules/users/infra/typeorm/entities/typeorm-user.entity';
import type {
  ICreateUser,
  ICreateUserRepository,
  IFindUserByEmail,
  IFindUserByEmailRepository,
} from '@modules/users/repositories';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
class TypeORMUserRepository
  implements ICreateUserRepository, IFindUserByEmailRepository
{
  constructor(
    @InjectRepository(TypeORMUserEntity)
    private readonly repository: Repository<TypeORMUserEntity>,
  ) {}

  async create(params: ICreateUser.Params): Promise<ICreateUser.Response> {
    const user = this.repository.create(params);
    await this.repository.save(user);
    return user;
  }

  async findByEmail(
    params: IFindUserByEmail.Params,
  ): Promise<IFindUserByEmail.Response> {
    const user = await this.repository.findOneBy({ email: params.email });
    return user;
  }
}

export { TypeORMUserRepository };
