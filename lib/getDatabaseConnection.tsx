import {createConnection, getConnectionManager} from "typeorm";

const promise = (async ()=>{
  const manager = getConnectionManager()
  if (!manager.has('default') ) {
    // 没有连接
    return await createConnection()
  } else {
    const current =  manager.get('default')
    if(current.isConnected) return  current
    // 连接了但是断了
    else  return await createConnection()
  }
})()

export  default  () =>{
  return promise
}
