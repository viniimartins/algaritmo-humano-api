import { DataSourceManager } from '@infra/typeorm/database-connection';
import { AuthModule } from '@modules/auth/auth.module';
import { CoursesModule } from '@modules/courses/courses.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DataSourceManager.options,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    CoursesModule,
  ],
})
class AppModule {}

export { AppModule };
