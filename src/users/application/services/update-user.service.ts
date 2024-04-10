import { Injectable } from '@nestjs/common';

import { IService } from 'src/core/domain/IService';
import { User } from 'src/users/domain/entities/user.entity';
import { UpdateUserDto } from 'src/users/interface/dto/update-user.dto';

@Injectable()
export class UsersUpdateService implements IService<UpdateUserDto, User> {
  async execute(inputs: UpdateUserDto): Promise<User> {
    return { name: 'Guiga - Alt' };
  }
}
