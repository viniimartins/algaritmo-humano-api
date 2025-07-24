import { SignUpController } from '@modules/auth/infra/http/controllers/sign-up.controller';
import { SignUpService } from '@modules/auth/services/sign-up.service';
import { UsersRepositoryModule } from '@modules/users/providers/users-repository.module';
import { Module } from '@nestjs/common';
import { HashProviderModule } from '@providers/hash-provider/hash-provider.module';

@Module({
  imports: [
    UsersRepositoryModule,
    HashProviderModule,
  ],
  providers: [
    SignUpService
  ],
  controllers: [
    SignUpController
  ],
})
class SignUpModule { }

export { SignUpModule }