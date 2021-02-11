import codePool from 'lib/codePool';
// import a from 'lib/codePool';
import {NextApiHandler} from 'next';

const Posts: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  let resdata:REQ = {
    code:1,
    msg:''
  }
  const {email} = req.body;
  if(/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(email)) {
    if(codePool.seed(email)){
      resdata.msg = '验证码已发送请查收！'
      // const timeId = setInterval(()=>{
      //   console.log('查看code',codePool.codeList)
      // },1000 * 30)
    } else {
      resdata.code = 0
      resdata.msg = '验证码发送失败！'
    }
  } else {
    resdata.code = 0
    resdata.msg = '邮箱有误，发送验证码失败！'
  }
  res.statusCode = 200;
  res.write(JSON.stringify(resdata));
  res.end();
};

export default Posts;