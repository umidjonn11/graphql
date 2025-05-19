import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepo: Repository<UserRepository>,
    private jwtService: JwtService,
  ) {}
  async login(loginData: LoginDto) {
    const user = await this.validateUser(
      loginData.username,
      loginData.password,
    );
    const token = await this.jwtService.signAsync({
      id: user?.id,
      role: user?.role,
      username: user?.username,
    });

    const refreshToken = await this.jwtService.sign(
      {
        id: user.id,
        role: user.role,
        username: user.username,
      },
      { secret: process.env.REFRESH_TOKEN_SECRET, expiresIn: '7d' },
    );

    await this.updateUser(user.id, { refreshToken: refreshToken });

    return { user, token, refreshToken };
  }
  async create(data:CreateUserDto) {
    const user =  this.userRepo.create(data);
    return await this.userRepo.save(user);
  }
  async validateUser(username: string, password: string) {
    const user = await this.userRepo.findOne({
      where: { username },
      select: ['email', 'id', 'name', 'password', 'username', 'role'],
    });
    try {
      if (!user) throw new NotFoundException('User topilmadi');
      console.log(user);

      const checking = await compare(password, user.password);
      if (!checking) throw new BadRequestException('Parol xato');
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateUser(id: string, updateData: any) {
    const user = await this.userRepo.findOneBy({ id });
    if (user) {
      Object.assign(user, updateData);
      await this.userRepo.save(user);
      return user;
    }
    throw new NotFoundException('User topilmadi');
  }
}
