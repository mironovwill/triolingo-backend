import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { UserLevels } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  avatar: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 255)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 255)
  lastName?: string;

  @IsString()
  @Length(2, 150)
  about?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  level: UserLevels;
}
