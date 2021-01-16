import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Comment} from "./Comment";
// 评论


@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column("varchar")
  title: string
  @Column("text")
  content: string
  @Column("int")
  authorId: number
  @Column({type:"timestamp"})
  createAt: Date
  @Column({type: "timestamp"})
  updateAt: Date
  
  @ManyToOne(type =>User, user => user.post )
  author:User
  @OneToMany( type => Comment, comment => comment.post)
  comment: Comment[]
}
