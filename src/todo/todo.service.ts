import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoModel } from './entities/todo.entity';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';
import { todo } from 'node:test';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(TodoModel) private todoRepo:Repository<TodoModel>){}
  async create(data: CreateTodoInput) {
    const todo= this.todoRepo.create(data);
    await this.todoRepo.save(todo)
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
