import { IBaseEntity } from '@modules/common/domain/entities/base.entity';
import type { UserRole } from '@modules/users/constants';

interface IUserEntity extends IBaseEntity {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export { IUserEntity };
