import { env } from '@config/env';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import type { UserJWTDTO } from '@providers/jwt-provider/dtos/user-jwtDTO';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyProvider extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.ACCESS_TOKEN_SECRET,
    });
  }

  validate(payload: UserJWTDTO) {
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
