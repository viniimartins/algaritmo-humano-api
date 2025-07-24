import { TypeORMBaseEntity } from '@modules/common/infra/typeorm/entities/typeorm-base.entity';
import { CourseStatus } from '@modules/courses/constants';
import type { ICourseEntity } from '@modules/courses/domain/entities/course.entity';
import { TypeORMUserEntity } from '@modules/users/infra/typeorm/entities/typeorm-user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('courses')
class TypeORMCourseEntity extends TypeORMBaseEntity implements ICourseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column('int')
  duration: number;

  @Column({ type: 'enum', enum: CourseStatus, default: CourseStatus.ACTIVE })
  status: CourseStatus;

  @ManyToOne(() => TypeORMUserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: TypeORMUserEntity;

  @Column({ name: 'user_id' })
  userId: string;
}

export { TypeORMCourseEntity };
