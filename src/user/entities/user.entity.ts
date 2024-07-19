import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  STUDENT = 'student',
}

export enum UserLevels {
  A1,
  A2,
  B1,
  B2,
  C1,
  C2,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    length: 255,
  })
  avatar: string;

  @Column({
    nullable: false,
    length: 255,
  })
  firstName: string;

  @Column({
    nullable: true,
    length: 255,
  })
  lastName?: string;

  @Column({
    nullable: true,
    length: 150,
  })
  about?: string;

  @Column({ nullable: false, unique: true, length: 255 })
  email: string;

  @Column({
    select: false,
    nullable: false,
    length: 255,
  })
  password: string;

  @Column({
    select: false,
    nullable: false,
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;

  @Column({
    nullable: false,
    type: 'enum',
    enum: UserLevels,
    default: UserLevels.A1,
  })
  level: UserLevels;

  @Column({ select: false, default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
