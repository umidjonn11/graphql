import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    UserModule,
    TodoModule,
    TypeOrmModule.forRoot({
      host: 'localhost',
      username: 'postgress',
      port: 5432,
      database: 'RestApi',
      password: 'umidjon06',
      type: 'postgres',
      synchronize: true,
      entities: [],
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
