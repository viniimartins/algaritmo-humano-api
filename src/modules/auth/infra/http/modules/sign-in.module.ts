import { SignInService } from '@modules/auth/services/sign-in.service';
import { UsersRepositoryModule } from '@modules/users/providers/users-repository.module';
import { Module } from '@nestjs/common';
import { HashProviderModule } from '@providers/hash-provider/hash-provider.module';
import { SignInController } from 'modules/auth/infra/http/controllers/sign-in.controller';

@Module({
  imports: [
    UsersRepositoryModule,
    HashProviderModule,

  ],
  providers: [
    SignInService
  ],
  controllers: [
    SignInController
  ],
})
class SignInModule { }

export { SignInModule }