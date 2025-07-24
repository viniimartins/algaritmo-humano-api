import {
  CREATE_USER_REPOSITORY_TOKEN,
  FIND_USER_BY_EMAIL_REPOSITORY_TOKEN,
} from '@modules/users/constants';
import { TypeORMUserEntity } from '@modules/users/infra/typeorm/entities/typeorm-user.entity';
import { TypeORMUserRepository } from '@modules/users/infra/typeorm/repositories/typeorm-user.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeORMUserEntity])],
  providers: [
    {
      provide: CREATE_USER_REPOSITORY_TOKEN,
      useClass: TypeORMUserRepository,
    },
    {
      provide: FIND_USER_BY_EMAIL_REPOSITORY_TOKEN,
      useClass: TypeORMUserRepository,
    },
  ],
  exports: [CREATE_USER_REPOSITORY_TOKEN, FIND_USER_BY_EMAIL_REPOSITORY_TOKEN],
})
class UsersRepositoryModule {}

export { UsersRepositoryModule };
