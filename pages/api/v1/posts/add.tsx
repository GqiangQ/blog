import {NextApiHandler} from 'next';
import session from 'lib/sessionPool'
import { Post } from 'src/entity/Post';
import { getDatabaseConnection } from 'lib/getDatabaseConnection';


const Posts: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const connection = await getDatabaseConnection();// 第一次链接能不能用 get
  let resdata:REQ = {
    code:1,
    data:{},
    msg:''
  }
  const { title, content,token } = req.body
  if(!session.find(token)?.id){
    resdata.code = 0
    resdata.msg = '登录信息已经过期！'
  } else {
    let post = new Post()
    post.title = title
    post.content = content
    post.userId = session.find(token).id
    const {id} = await connection.manager.save(post)
    resdata.code = 1
    resdata.data = { id }
    resdata.msg ='添加成功！'
  }

  res.statusCode = 200;
  res.write(JSON.stringify(resdata));
  res.end();
};
export default Posts;