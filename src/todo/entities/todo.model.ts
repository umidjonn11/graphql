import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int, { description: '' })
  id: number;
  @Field(() => String, { description: '' })
  title: string;
  @Field(() => Boolean)
  completed: boolean;
  @Field(() => Date)
  createdAt: Date;
}