import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  PORT: num({ desc: 'Application port', example: '3333', default: 3333 }),
  NEXT_PUBLIC_APP_BASE_URL: str({
    desc: 'Application base URL',
    example: 'http://localhost:3000',
  }),
  DATABASE_HOST: str({ desc: 'Database host', example: 'localhost' }),
  DATABASE_PORT: num({ desc: 'Database port', example: '5432' }),
  DATABASE_USERNAME: str({ desc: 'Database username', example: 'admin' }),
  DATABASE_PASSWORD: str({ desc: 'Database password', example: 'root' }),
  DATABASE_NAME: str({ desc: 'Database name', example: 'app_db' }),
  CRYPT_SALT: num({
    desc: 'The salt to be used in encryption',
    example: '12',
  }),
  ACCESS_TOKEN_SECRET: str({ desc: 'Access token secret' }),
  ACCESS_TOKEN_EXPIRES_IN: num({
    desc: 'Access token expires in (seconds)',
    example: '3600',
  }),
});

export { env };
