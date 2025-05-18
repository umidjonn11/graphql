import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { Request,Response } from 'express';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() registerDto: CreateUserDto) {
    try {
      const user = await this.userService.create(registerDto);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(loginDto, '--contr');

    const { user, token } =
      await this.userService.login(loginDto);

    res
      .status(HttpStatus.OK)
      .json({ status: 'Success', data: { user, token } });
  }
}
