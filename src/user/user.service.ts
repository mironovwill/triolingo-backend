import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.usersRepository.create(createUserDto);
      await this.usersRepository.save(user);
      return plainToInstance(User, user, {
        excludeExtraneousValues: true,
      });
    } catch (e) {
      throw e;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.usersRepository.update(id, updateUserDto);
    } catch (e) {
      throw e;
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await this.usersRepository.find();

      return plainToInstance(User, users, {
        excludeExtraneousValues: true,
      });
    } catch (e) {
      throw e;
    }
  }

  async findOne(id: number): Promise<User | null> {
    try {
      const user = await this.usersRepository.findOneBy({ id });

      return plainToInstance(User, user, {
        excludeExtraneousValues: true,
      });
    } catch (e) {
      throw e;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.usersRepository.delete(id);
    } catch (e) {
      throw e;
    }
  }
}
