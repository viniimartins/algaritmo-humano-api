import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  PORT: num({ desc: 'Application port', example: '3333', default: 3333 }),
  NEXT_PUBLIC_APP_BASE_URL: str({
    desc: 'Application base URL',
    example: 'http://localhost:3000',
  }),
  DATABASE_URL: str({
    desc: 'Database connection URL',
    example: 'postgresql://user:password@localhost:5432/mydb',
  }),
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
