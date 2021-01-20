import { NextApiRequest, NextApiResponse } from "next";
import getDatabaseConnection from "../../../lib/getDatabaseConnection";
import md5 from 'md5'
import {User} from "../../../src/entity/User";
import {use} from "ast-types";


const Posts = async(req:NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Ccontent-Type','application/json; charset=utf-8')
  const { username,password, passwordConfirmation } = req.body
  // if (password !== passwordConfirmation){
  //   data.code = 0
  //   data.msg = '密码不一致'
  // }
  const connection = await getDatabaseConnection()
  const user = new User()
  user.username = username.trim()
  user.passwordDigest = md5(password)
  await connection.manager.save(user)
  req.statusCode = 200
  res.write(JSON.stringify(user))
  res.end()
};


export default Posts