import { env } from '@config/env';
import { DataSourceOptions } from 'typeorm';

const connection = new Map<'default', DataSourceOptions>([
  [
    'default',
    {
      type: 'postgres',
      host: env.DATABASE_HOST,
      port: env.DATABASE_PORT,
      username: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
      // logging: !env.isProduction,
      migrationsRun: false,
      entities: [
        `${__dirname}/../../modules/**/infra/typeorm/entities/*.{js,ts}`,
      ],
      migrations: [`${__dirname}/migrations/*.{js,ts}`],
    },
  ],
]);

export { connection };
