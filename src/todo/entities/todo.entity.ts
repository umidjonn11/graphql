import { UserRepository } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  completed: boolean;

  @CreateDateColumn({default:new Date(Date.now())})
    created_at:Date

  @ManyToOne(() => UserRepository, (user) => user.todos, { onDelete: "CASCADE" })
  user: UserRepository;
  
  

}
