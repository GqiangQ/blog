import {Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./Post";
import  {Comment} from './Comment'
// 用户


@Entity('users')
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column("varchar")
  username: string;
  @Column("varchar")
  passwordDigest: string
  @Column({type:"timestamp"})
  createAt: Date
  @Column({type: "timestamp"})
  updateAt: Date
  
  
  @OneToMany(type=>Post, post=>post.author)
  post: Post[]
  @OneToMany(type=>Comment, comment=>comment.user)
  comment: Comment[]
}
