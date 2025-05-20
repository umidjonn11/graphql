import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:false})
  title: string;
  @Column({nullable:false})
  completed: boolean;
  @Column({nullable:false})
  createdAt: Date;
}
