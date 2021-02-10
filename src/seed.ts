import { Post } from './entity/Post';
import { User } from './entity/User';
import { Comment } from './entity/Comment';

import 'reflect-metadata';
import {createConnection} from 'typeorm';

createConnection().then(async connection => {
  const { manager } = connection
  const user = new User();
  user.username = 'gqq'
  user.password = 'gqq'
  user.email = '12345@qq.com'
  await manager.save(user)

  const post = new Post()
  post.user = user
  post.title = '第一篇博客'
  post.content = '第一篇博客的内容'
  await manager.save(post)
  const comment = new Comment()
  comment.content = '第一篇博客的第一条评论'
  comment.post = post
  comment.user = user
  await manager.save(comment)

  connection.close();
}).catch(error => console.log(error));
