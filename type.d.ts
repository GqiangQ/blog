// 放全局的types
// 用户登录的请求体
type USERTYPE = {password:string,email?:string,username?:string}

// 接口的返回体
type REQ = { code:number,data?:any,msg:string}