import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({default:"hello world"})
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({default:false})
  completed: boolean;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  created_at: Date;

}
