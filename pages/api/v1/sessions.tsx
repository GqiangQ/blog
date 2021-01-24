import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import { withSessions } from "../../../lib/withSissions";
import getDatabaseConnection from "../../../lib/getDatabaseConnection";
import md5 from "md5";

const Session: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  const { username, password} = req.body
  const data = await (async () => {
    let data = {}
    const connection = await getDatabaseConnection()
    const User = await  connection.manager.findOne('users', { where: { username } })
    if( User ) {
      const passwordDigest = md5(password)
      if(passwordDigest === User.passwordDigest){
        req.session.set('current', User)
        await req.session.save()
        console.log()
        data =  { code : 0, data: 'ddd', msg: '登录成功' }
      }
      else data =  { code: 1, data: username, msg: '密码错误' }
    }
    else data =  { code: 1, data: username, msg: '用户名不存在' }
    return data
  })()
  req.statusCode = 200
  res.write(JSON.stringify(data))
  res.end()
};


export default withSessions( Session)