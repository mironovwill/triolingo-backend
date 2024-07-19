import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsBoolean,
  IsEnum,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { UserLevels, UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  avatar: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  firstName: string;

  @ApiProperty()
  @IsString()
  @Length(2, 50)
  lastName?: string;

  @ApiProperty()
  @IsString()
  @Length(2, 150)
  about?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UserLevels)
  @IsString()
  level: UserLevels;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
  }
}
