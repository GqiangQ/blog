import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";
// 文章

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column("text")
  comment: string
  
  @ManyToOne(type =>User, user => user.comment )
  user:User
  @ManyToOne(type =>Post, post => post.comment )
  post:Post
}
