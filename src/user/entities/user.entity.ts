import { UserRole } from 'src/security/roles.enum';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {hash} from "bcrypt"
import { Todo } from 'src/todo/entities/todo.entity';
@Entity({ name: 'users' })
export class UserRepository {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column({ nullable: false, select: false })
  password: string;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ nullable: false, unique: true })
  username: string;
  @Column({ default: UserRole.user })
  role: string;
  @Column({nullable:true,select:false})
  refreshToken:string
  @Column({ default: true })
  isActive: boolean;
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];


  @BeforeInsert()
  async hash(){
    this.password=await hash(this.password,12)  
  }
}
