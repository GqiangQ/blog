import {NextApiHandler} from 'next';
import {getDatabaseConnection} from '../../../lib/getDatabaseConnection';
import {User} from '../../../src/entity/User';
import md5 from 'md5';

const Posts: NextApiHandler = async (req, res) => {
  const {username, password, passwordConfirmation} = req.body;
  const connection = await getDatabaseConnection();// 第一次链接能不能用 get
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // const user = new User();
  // user.username = username.trim();
  // user.password = `${md5(password)}q`;
  // user.passwordConfirmation = passwordConfirmation;
  // await user.validate();
  // if (user.hasErrors()) {
    res.statusCode = 200;
    res.write(JSON.stringify('dddd'));
  // } else {
  //   await connection.manager.save(user);
  //   res.statusCode = 200;
  //   res.write(JSON.stringify(user));
  // }
  res.end();
};

export default Posts;