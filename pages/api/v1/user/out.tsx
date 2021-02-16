import {NextApiHandler} from 'next';
import {getDatabaseConnection} from '../../../../lib/getDatabaseConnection';
import {User} from '../../../../src/entity/User';
import md5 from 'md5';
import session from 'lib/sessionPool';


const Posts: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const {token} = req.body;
  session.del(token)
  let resdata:REQ = {
    code:1,
    data:{},
    msg:'用户名或密码不正确'
  }
  res.statusCode = 200;
  res.write(JSON.stringify(resdata));
  res.end();
};

export default Posts;