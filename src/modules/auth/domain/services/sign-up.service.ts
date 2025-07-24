import { IUserEntity } from '@modules/users/domain/entities/user.entity';

namespace ISignUp {
  export interface Request {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }

  export type Response = IUserEntity;
}

interface ISignUpService {
  execute(params: ISignUp.Request): Promise<ISignUp.Response>;
}

export { ISignUp, ISignUpService };
