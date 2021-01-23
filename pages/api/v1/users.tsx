import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import getDatabaseConnection from "../../../lib/getDatabaseConnection";
import md5 from 'md5'
import {User} from "../../../src/entity/User";


const Users:NextApiHandler = async(req:NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type','application/json; charset=utf-8')
  const { username,password, passwordConfirmation } = req.body
  const connection = await getDatabaseConnection()
  
  const data = await (async () =>{
    if (password !== passwordConfirmation) return {code:0,data:'',msg: '密码不一致'}
    const found = await connection.manager.find('users', {username: username})
    if(found.length) return {code:0,data:'',msg: '用户已存在'}
    else{
      const user = new User()
      user.username = username
      user.passwordDigest = md5(password)
      await connection.manager.save('users',user)
      return {code:0, data:{ id: user.id}, msg: '添加成功'}
    }
  })()
  req.statusCode = 200
  console.log(data)
  res.write(JSON.stringify(data))
  res.end()
};


export default Users