import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({default:"Umid"})
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({default:"umidjonu@gmail.com"})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({default:"Qwerty1234"})
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({default:"Kozya"})
  @IsNotEmpty()
  @IsString()
  username: string;


  @ApiProperty({default:"user"})
  @IsNotEmpty()
  @IsString()
  role:string
}
