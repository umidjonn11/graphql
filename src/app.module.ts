import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { UserRepository } from './user/entities/user.entity';
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [
    UserModule,
    TodoModule,
    TypeOrmModule.forRoot({
      host: 'localhost',
      username: 'postgres',
      port: 5432,
      database: 'RestApi',
      password: 'umidjon06',
      type: 'postgres',
      synchronize: true,
      entities: [UserRepository,Todo],
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
