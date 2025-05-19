import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  title?: string | undefined;

  @IsOptional()
  completed?: boolean | undefined;

  
  @IsOptional()
  created_at?: Date | undefined;
}
