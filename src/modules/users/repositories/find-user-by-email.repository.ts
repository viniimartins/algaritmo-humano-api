import { IUserEntity } from '../domain/entities/user.entity';

namespace IFindUserByEmail {
  export interface Params {
    email: string;
  }

  export type Response = IUserEntity | null;
}

interface IFindUserByEmailRepository {
  findByEmail: (
    params: IFindUserByEmail.Params,
  ) => Promise<IFindUserByEmail.Response>;
}
export { IFindUserByEmail, IFindUserByEmailRepository };
