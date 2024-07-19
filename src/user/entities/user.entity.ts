import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Expose, Exclude } from 'class-transformer';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  TEACHER = 'teacher',
  GUEST = 'guest',
}

export enum UserLevels {
  A1 = 'a1',
  A2 = 'a2',
  B1 = 'b1',
  B2 = 'b2',
  C1 = 'c1',
  C2 = 'c2',
}

@Entity()
export class User {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Column({
    nullable: false,
  })
  avatar: string;

  @Expose()
  @Column({
    nullable: false,
    length: 50,
  })
  firstName: string;

  @Expose()
  @Column({
    nullable: true,
    length: 50,
  })
  lastName: string;

  @Expose()
  @Column({
    nullable: true,
    length: 150,
  })
  about?: string;

  @Expose()
  @Column({ nullable: false, unique: true, length: 255 })
  email: string;

  @Exclude()
  @Column({
    nullable: false,
  })
  password: string;

  @Expose()
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Expose()
  @Column({
    type: 'enum',
    enum: UserLevels,
    default: UserLevels.A1,
  })
  level: UserLevels;

  @Expose()
  @Column({ default: true })
  isActive: boolean;

  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
