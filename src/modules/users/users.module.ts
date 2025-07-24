import { Module } from '@nestjs/common';

import { CreateUsersModule } from './infra/http/modules/create-user.module';

@Module({
  imports: [CreateUsersModule],
})
class UsersModule {}

export { UsersModule };
