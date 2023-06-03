import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    try {
      return await this.usersRepository.create(createUserDto);
    } catch (error) {
      throw new ConflictException('email already exists.');
    }
  }

  async findAll() {
    const users = await this.usersRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    try {
      return await this.usersRepository.findOne(id);
    } catch (error) {
      throw new NotFoundException('user not found.');
    }
  }

  async findByEmail(email: string) {
    const users = await this.usersRepository.findByEmail(email);
    return users;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    try {
      return await this.usersRepository.update(updateUserDto, id);
    } catch (error) {
      if (updateUserDto.email) {
        throw new ConflictException('E-mail already exists');
      }
      throw error;
    }
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found.');
    }
    return await this.usersRepository.delete(id);
  }
}
