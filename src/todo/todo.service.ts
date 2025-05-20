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
  constructor(
    @InjectRepository(TodoModel) private todoRepo: Repository<TodoModel>,
  ) {}
  async create(data: CreateTodoInput) {
    let todo = this.todoRepo.create(data);
    todo = await this.todoRepo.save(todo);
    return todo;
  }

  findAll() {
    return this.todoRepo.find();
  }

  findOne(id: any) {
    let todo = this.todoRepo.findOne({ where: { id } });
    return todo;
  }

  async update(id: number, updateTodoInput: UpdateTodoInput) {
    const todo = await this.todoRepo.findOne({ where: { id } }); // ✅ await here

    if (!todo) {
      throw new Error(`Todo with ID ${id} not found`);
    }

    Object.assign(todo, updateTodoInput);
    await this.todoRepo.save(todo);
    return todo;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
