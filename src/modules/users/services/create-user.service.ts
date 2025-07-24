import { CREATE_USER_REPOSITORY_TOKEN, FIND_USER_BY_EMAIL_REPOSITORY_TOKEN } from '@modules/users/constants';
import { ICreateUser, ICreateUserService } from '@modules/users/domain/services';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
} from '@modules/users/repositories';
import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { HASH_PROVIDER_TOKEN } from '@providers/hash-provider/constants/hash-provider-token';
import type { IHashProvider } from '@providers/hash-provider/models/hash.provider';

@Injectable()
class CreateUserService implements ICreateUserService {
  constructor(
    @Inject(CREATE_USER_REPOSITORY_TOKEN)
    private createUserRepository: ICreateUserRepository,

    @Inject(FIND_USER_BY_EMAIL_REPOSITORY_TOKEN)
    private findUserByEmailRepository: IFindUserByEmailRepository,

    @Inject(HASH_PROVIDER_TOKEN)
    private hashProvider: IHashProvider,
  ) { }

  async execute(params: ICreateUser.Request): Promise<ICreateUser.Response> {
    const { name, email, password, role } = params;

    const alreadyExists = await this.findUserByEmailRepository.findByEmail({
      email,
    });

    if (alreadyExists) {
      throw new ConflictException('Email address already used');
    }

    const user = await this.createUserRepository.create({
      name,
      email,
      password: await this.hashProvider.hash(password),
      role,
    });

    return user;
  }
}

export { CreateUserService };
