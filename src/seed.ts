import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Post} from "./entity/Post";
import {Comment} from "./entity/Comment";

createConnection().then(async connection => {
  const {manager} = connection
  // 创建用户
  const  u1 = new User()
  u1.username = 'gqq'
  u1.passwordDigest = 'xxx'
  await  manager.save(u1)
  // 创建博客
  const p1 = new Post()
  p1.title = '第一篇博客'
  p1.content = '第一篇博客的内容'
  p1.author = u1
  await manager.save(p1)
  // 创建评论
  const c1 = new Comment()
  c1.user = u1
  c1.post = p1
  c1.content = 'gqq的第一篇博客的第一条评论'
  await manager.save(c1)
  connection.close()
}).catch(error => console.log(error));
