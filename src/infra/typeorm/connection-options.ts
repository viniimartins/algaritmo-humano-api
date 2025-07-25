import { env } from '@config/env';
import type { DataSourceOptions } from 'typeorm';

const connection = new Map<'default', DataSourceOptions>([
  [
    'default',
    {
      type: 'postgres',
      url: env.DATABASE_URL,
      migrationsRun: false,
      entities: [
        `${__dirname}/../../modules/**/infra/typeorm/entities/*.{js,ts}`,
      ],
      migrations: [`${__dirname}/migrations/*.{js,ts}`],
    },
  ],
]);

export { connection };
