import type {
  ISignUp,
  ISignUpService,
} from '@modules/auth/domain/services/sign-up.service';
import {
  CREATE_USER_REPOSITORY_TOKEN,
  FIND_USER_BY_EMAIL_REPOSITORY_TOKEN,
} from '@modules/users/constants';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
} from '@modules/users/repositories';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HASH_PROVIDER_TOKEN } from '@providers/hash-provider/constants/hash-provider-token';
import { IHashProvider } from '@providers/hash-provider/models/hash.provider';

@Injectable()
class SignUpService implements ISignUpService {
  constructor(
    @Inject(CREATE_USER_REPOSITORY_TOKEN)
    private createUserRepository: ICreateUserRepository,

    @Inject(FIND_USER_BY_EMAIL_REPOSITORY_TOKEN)
    private findUserByEmailRepository: IFindUserByEmailRepository,

    @Inject(HASH_PROVIDER_TOKEN)
    private hashProvider: IHashProvider,
  ) {}

  async execute(params: ISignUp.Request): Promise<ISignUp.Response> {
    const existingUser = await this.findUserByEmailRepository.findByEmail({
      email: params.email,
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    if (params.password !== params.passwordConfirmation) {
      throw new BadRequestException(
        'Password and password confirmation do not match',
      );
    }

    const hashedPassword = await this.hashProvider.hash(params.password);

    const createdUser = await this.createUserRepository.create({
      name: params.name,
      email: params.email,
      password: hashedPassword,
    });

    return createdUser;
  }
}

export { SignUpService };
