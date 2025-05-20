import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;
  @Field(() => Boolean)
  completed: boolean;
  @Field(() => Date)
  createdAt: Date;
  id: number;
}