import type {
  ISignIn,
  ISignInService,
} from '@modules/auth/domain/services/sign-in.service';
import { FIND_USER_BY_EMAIL_REPOSITORY_TOKEN } from '@modules/users/constants';
import { IFindUserByEmailRepository } from '@modules/users/repositories';
import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HASH_PROVIDER_TOKEN } from '@providers/hash-provider/constants/hash-provider-token';
import { IHashProvider } from '@providers/hash-provider/models/hash.provider';

@Injectable()
class SignInService implements ISignInService {
  constructor(
    @Inject(FIND_USER_BY_EMAIL_REPOSITORY_TOKEN)
    private findUserByEmailRepository: IFindUserByEmailRepository,

    @Inject(HASH_PROVIDER_TOKEN)
    private hashProvider: IHashProvider,

    private jwtService: JwtService,
  ) {}

  async execute(params: ISignIn.Request): Promise<ISignIn.Response> {
    const foundUser = await this.findUserByEmailRepository.findByEmail({
      email: params.email,
    });

    if (!foundUser) {
      throw new NotFoundException('E-mail or password is incorrect');
    }

    const passwordMatch = await this.hashProvider.compare(
      params.password,
      foundUser.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('E-mail or password is incorrect');
    }

    const { id, email, role } = foundUser;

    const token = this.jwtService.sign({
      sub: id,
      email,
      role,
    });

    return {
      token,
    };
  }
}

export { SignInService };
