import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {
  // console.log(connection)
  // find
    console.log('造')
    const p = new Post({title: 'post', content:'content'})
    const a = await connection.manager.save(p)
  const post = await connection.manager.find(Post)
  console.log('post:',post)
  // create
  // const p = new Post()
  // console.log('p:', p)
  // p.title = 'post 1'
  // p.content = '我的第一篇文章'
  // const a = await connection.manager.save(p)
  // console.log('a:', a)
  // const post2 = await connection.manager.find(Post)
  // console.log("post2:",post2)
  
  connection.close()
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    //
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);
    //
    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
