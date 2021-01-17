import {createConnection, getConnectionManager} from "typeorm";
import  'reflect-metadata'
import  { Post } from "../src/entity/Post";
import { User } from "../src/entity/User";
import { Comment } from "../src/entity/Comment";
import config from '../ormconfig.json'

const create = async()=> {
  // @ts-ignore
  return await createConnection({
    ...config,
    entities: [Post, User, Comment]
  })
}
const promise = (async ()=>{
  const manager = getConnectionManager()
  if (!manager.has('default') ) {
    // 没有连接
    return create()
  } else {
    const current =  manager.get('default')
    if(current.isConnected) return  current
    // 连接了但是断了
    else  return create()
  }
})()

export  default  () =>{
  return promise
}
