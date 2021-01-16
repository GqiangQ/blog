import {Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./Post";
import  {Comment} from './Comment'
// 用户


@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number
  @Column("varchar")
  username: string;
  @Column("varchar")
  passwordDigest: string
  @Column("time")
  createAt: Date
  @Column("time")
  updateAt: Date
  @OneToMany(type=>Post, post=>post.author)
  post: Post[]
  @OneToMany(type=>Comment, comment=>comment.user)
  comment: Comment[]
}
