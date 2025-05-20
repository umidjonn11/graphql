import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodoModel } from './todo/entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    host: 'localhost',
    username: 'postgres',
    port: 5432,
    database: 'graphql',
    password: 'umidjon06',
    type: 'postgres',
    synchronize: true,
    entities: [TodoModel],
    autoLoadEntities: true,
  }),GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    graphiql: true,
    autoSchemaFile: './src/schema.gql',
  }),TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
