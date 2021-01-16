import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";
// 文章

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column("int")
  userId: number
  @Column("number")
  postId: number
  @Column("text")
  content: string
  @Column("timestamp")
  createAt: Date
  
  @ManyToOne(type =>User, user => user.comment )
  user:User
  @ManyToOne(type =>Post, post => post.comment )
  post:Post
}
