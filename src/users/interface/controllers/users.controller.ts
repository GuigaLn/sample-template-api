import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';

import { UsersFindAllService } from 'src/users/application/services/find.all-user.service';
import { UsersCreateService } from 'src/users/application/services/create-user.service';
import { UsersUpdateService } from 'src/users/application/services/update-user.service';

import { CreateUserDto } from 'src/users/interface/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/interface/dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersFindAllService: UsersFindAllService,
    private readonly usersCreateService: UsersCreateService,
    private readonly usersUpdateService: UsersUpdateService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersCreateService.execute(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersFindAllService.execute();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersUpdateService.execute(updateUserDto);
  }
}
