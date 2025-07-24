import type { UserRole } from '@modules/users/constants';
import { IUserEntity } from '@modules/users/domain/entities/user.entity';

namespace ICreateUser {
  export interface Params {
    name: string;
    email: string;
    password: string;
    role?: UserRole;
  }

  export type Response = IUserEntity;
}

interface ICreateUserRepository {
  create: (params: ICreateUser.Params) => Promise<ICreateUser.Response>;
}

export { ICreateUser, ICreateUserRepository };
