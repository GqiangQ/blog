import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn("increment")
  id: number;
  /*
  // 第一种方法
  @Column("varchar")
  title: string;
  @Column("text")
  content: string;
  constructor(title: string,content: string) {
    this.title = title
    this.content = content
  }
   */
  // 第二种方法
  @Column("varchar")
  title: string;
  @Column("text")
  content: string;
  constructor(attrbutes: Partial<Post>) {
    Object.assign(this, attrbutes)
  }
}
