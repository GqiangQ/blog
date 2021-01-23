import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import getDatabaseConnection from "../../../lib/getDatabaseConnection";
import md5 from "md5";

const Sessions: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  const { username, password } = req.body
  
  const data = await (async () => {
    const connection = await  getDatabaseConnection()
     const user = await connection.manager.findOne('users', { where:{ username } })
      if(user){
        const passwordDigest = md5(password)
        if(passwordDigest === user.passwordDigest) {
          return {
            code: 0,
            data: '',
            msg: '登录成功'
          }
        } else {
          return {
            code: 0,
            data: '',
            msg: '密码不匹配'
          }
        }
      } else{
        return {
          code: 0,
          data: username,
          msg: '用户名不存在'
        }
      }
  })()
  req.statusCode = 200
  res.write(JSON.stringify(data))
  res.end()
};


export default Sessions