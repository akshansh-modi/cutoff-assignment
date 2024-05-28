// src/users/users.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createUserDto: CreateUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.usersService.create(user);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id') id: number, @Body() createUserDto: CreateUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}

