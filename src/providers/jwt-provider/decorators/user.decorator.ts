import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { UserDTO } from '@providers/jwt-provider/dtos/userDTO';

const User = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{ user: UserDTO }>();

    return request.user;
  },
);

export { User }