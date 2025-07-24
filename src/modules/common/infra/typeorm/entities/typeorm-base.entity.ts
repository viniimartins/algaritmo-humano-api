import type { IBaseEntity } from '@modules/common/domain/entities/base.entity';
import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

abstract class TypeORMBaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date | null;

  @BeforeUpdate()
  populateUpdatedAt() {
    this.updatedAt = new Date();
  }
}

export { TypeORMBaseEntity };
