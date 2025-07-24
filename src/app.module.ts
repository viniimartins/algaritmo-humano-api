
import { DataSourceManager } from '@infra/typeorm/database-connection';
import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DataSourceManager.options,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController]
})
class AppModule { }

export { AppModule };