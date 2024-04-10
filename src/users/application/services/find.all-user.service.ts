import { Injectable } from '@nestjs/common';

import { IService } from 'src/core/domain/IService';
import { User } from 'src/users/domain/entities/user.entity';

@Injectable()
export class UsersFindAllService implements IService<undefined, User[]> {
  async execute(): Promise<User[]> {
    return [{ name: 'Guiga' }, { name: 'Guiga - 02' }];
  }
}
