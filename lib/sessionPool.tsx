import md5 from 'md5'

type sessionList = {
  id: number,
}
const globalAny:any = global;
globalAny.sessionList = globalAny.sessionList || new Map()
const sessionList = globalAny.sessionList
export default {
  // 查看code
  find(key:string){
    return sessionList.get(key) || null
  },
  set(id:number){
    const name = `${md5(id+'')}${new Date().getTime()}`
        sessionList.set(name,{ id })
        return name
  },
  del(token:string){
    sessionList.delete(token)
  },
  all(){
    return sessionList
  }          
}