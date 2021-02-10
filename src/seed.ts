import { User } from './entity/User';
import 'reflect-metadata';
import {createConnection} from 'typeorm';

createConnection().then(async connection => {
  const { manager } = connection
  console.log('posts 数据填充了');
  const user = new User();
  user.username = 'gqq'
  user.password = 'gqq'
  user.email = '12345@qq.com'
  await manager.save(user)
  connection.close();
}).catch(error => console.log(error));
