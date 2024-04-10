import { Module } from '@nestjs/common';
import { UsersController } from './interface/controllers/users.controller';

import { UsersFindAllService } from './application/services/find.all-user.service';
import { UsersCreateService } from './application/services/create-user.service';
import { UsersUpdateService } from './application/services/update-user.service';

@Module({
  controllers: [UsersController],
  providers: [UsersCreateService, UsersUpdateService, UsersFindAllService],
})
export class UsersModule {}
