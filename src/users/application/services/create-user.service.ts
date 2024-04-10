import { Injectable } from '@nestjs/common';

import { IService } from 'src/core/domain/IService';
import { User } from 'src/users/domain/entities/user.entity';
import { CreateUserDto } from 'src/users/interface/dto/create-user.dto';

@Injectable()
export class UsersCreateService implements IService<CreateUserDto, User> {
  async execute(inputs: CreateUserDto): Promise<User> {
    return { name: 'Guiga' };
  }
}
