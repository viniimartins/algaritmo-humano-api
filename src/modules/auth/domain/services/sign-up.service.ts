import type { WithoutEntityBaseProperties } from '@modules/common/helpers/without-entity-base-properties';
import { IUserEntity } from '@modules/users/domain/entities/user.entity';

namespace ISignUp {
  export type Request = WithoutEntityBaseProperties<IUserEntity>;

  export type Response = IUserEntity;
}

interface ISignUpService {
  execute(params: ISignUp.Request): Promise<ISignUp.Response>;
}

export { ISignUp, ISignUpService };
