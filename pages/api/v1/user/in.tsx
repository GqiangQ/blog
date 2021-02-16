import {NextApiHandler} from 'next';
import {getDatabaseConnection} from '../../../../lib/getDatabaseConnection';
import {User} from '../../../../src/entity/User';
import md5 from 'md5';
import sessionPool from 'lib/sessionPool';


const Posts: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const {username, password} = req.body;
  const connection = await getDatabaseConnection();// 第一次链接能不能用 get
  let option:USERTYPE = {password:'blog'+password+md5('gqq')}
  if(/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(username)) {
    option.email = username
  } else {
    option.username = username
  }
  option.password = 'blog'+password+md5('gqq')
  let resdata:REQ = {
    code:1,
    msg:'ddd'
  }
  const user =await connection.manager.findOne(User, {where: option});
  if (user){
    resdata.data = {username:user.username,token:sessionPool.set(user.id)}
    resdata.msg = '登录成功'
  } else {
    resdata.code = 0
    resdata.data = {}
    resdata.msg = '用户名或密码不正确'
  }
  res.statusCode = 200;
  res.write(JSON.stringify(resdata));
  res.end();
};

export default Posts;