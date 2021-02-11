// import schedule from 'lib/schedule'
import codePool from 'lib/codePool'
import {NextApiHandler} from 'next';
import {getDatabaseConnection} from '../../../../lib/getDatabaseConnection';
// import {User} from '../../../src/entity/User';
import md5 from 'md5';
import { User } from 'src/entity/User';

const Posts: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  let resdata:REQ = {
    code:1,
    msg:''
  }
  const {username, password, passwordAgain,email,code} = req.body;
  const connection = await getDatabaseConnection();// 第一次链接能不能用 get
  
  // schedule('10 * * * * *', () => {
  //   console.log(new Date());
  // })

  if(password!==passwordAgain) {
    resdata.code = 0
    resdata.msg = '两次密码不一致！'
  } 
  else if(!/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(email)) {
    resdata.code = 0
    resdata.msg = '邮箱格式不正确'
  }
  else if (!codePool.find(email+code)) {
    resdata.code = 0
    resdata.msg = '验证码无效，请重新获取验证码！'
  } else{
    let option:USERTYPE = {password}
    const user =await connection.manager.findOne(User, {where: option});
    if(user) {
      resdata.code = 0
      resdata.msg = '用户名已经存在'
    } else {
      resdata.msg = '注册成功'
    }
  }

  // const user = new User();
  // user.username = username.trim();
  // user.password = `${md5(password)}q`;
  // user.passwordConfirmation = passwordConfirmation;
  // await user.validate();
  // if (user.hasErrors()) {
    res.statusCode = 200;
    res.write(JSON.stringify(resdata));
  // } else {
  //   await connection.manager.save(user);
  //   res.statusCode = 200;
  //   res.write(JSON.stringify(user));
  // }
  res.end();
};

export default Posts;