import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { todo } from 'node:test';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>) {}
  async create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepo.create(createTodoDto);
    await this.todoRepo.save(todo);
    return todo;
  }

  findAll() {
    return this.todoRepo.find();
  }

  findOne(id: any) {
    return this.todoRepo.findOneBy(id);
  }

  update(id: any, updateTodoDto: UpdateTodoDto) {
    return this.todoRepo.update(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todoRepo.delete(id);
  }
}
