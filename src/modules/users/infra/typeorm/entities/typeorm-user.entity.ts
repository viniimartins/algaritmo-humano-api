import { TypeORMBaseEntity } from '@modules/common/infra/typeorm/entities/typeorm-base.entity';
import { UserRole } from '@modules/users/constants';
import { IUserEntity } from '@modules/users/domain/entities/user.entity';
import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';

@Entity('users')
class TypeORMUserEntity extends TypeORMBaseEntity implements IUserEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;
}

export { TypeORMUserEntity };
