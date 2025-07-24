import { env } from '@config/env';
import { SignInModule } from '@modules/auth/infra/http/modules/sign-in.module';
import { SignUpModule } from '@modules/auth/infra/http/modules/sign-up.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategyProvider } from '@providers/jwt-provider/implementations/jwt-strategy.provider';

@Module({
  imports: [
    SignUpModule,
    SignInModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: env.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: env.ACCESS_TOKEN_EXPIRES_IN },
    }),
  ],
  providers: [JwtStrategyProvider],
  exports: [JwtStrategyProvider]
})
class AuthModule { }

export { AuthModule }