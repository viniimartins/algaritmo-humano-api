import { CreateUserController } from '@modules/users/infra/http/controllers/create-user.controller';
import { UsersRepositoryModule } from '@modules/users/providers/users-repository.module';
import { CreateUserService } from '@modules/users/services/create-user.service';
import { Module } from '@nestjs/common';
import { HashProviderModule } from '@providers/hash-provider/hash-provider.module';

@Module({
  imports: [UsersRepositoryModule, HashProviderModule],
  providers: [CreateUserService],
  controllers: [CreateUserController],
})
class CreateUsersModule {}

export { CreateUsersModule };
