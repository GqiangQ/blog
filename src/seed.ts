import 'reflect-metadata';
import {createConnection} from 'typeorm';

createConnection().then(async connection => {
  console.log('posts 数据填充了');
  connection.close();
}).catch(error => console.log(error));
