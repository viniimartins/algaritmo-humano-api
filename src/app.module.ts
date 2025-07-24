import { DataSourceManager } from '@infra/typeorm/database-connection';
import { AuthModule } from '@modules/auth/auth.module';
import { CoursesModule } from '@modules/courses/courses.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DataSourceManager.options,
      autoLoadEntities: true,
    }),
    AuthModule,
    CoursesModule,
  ],
})
class AppModule {}

export { AppModule };
