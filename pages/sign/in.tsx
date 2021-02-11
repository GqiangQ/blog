import {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { Input, Card, Button,message } from 'antd';

const SignIn: NextPage = (props) => {
  const [form,setForm] = useState({
    password: '',
    username: ''
  })
  const submit = () => {
    if (!form.username || !form.password) return message.info('用户名或密码不能为空!')
    axios.post('/api/v1/user/in', form).then(({status,data,...a}) => {
      if(status !== 200) return message.error('xc')
      if(data.code) {
        message.success(data.msg)
      } else {
        message.error(data.msg)
      }
    })
  }
  return<div style={{width: '100vw', height:'100vh'}} >
    <Card style={{width: '350px', position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} hoverable>
      <h1 style={{ textAlign:'center' }}>登录</h1>
      <Input style={{ marginBottom:'1em' }} value={form.username} onChange={(e)=>setForm({...form, username:e.target.value})} placeholder="输入用户名或邮箱" allowClear />
      <Input.Password style={{ marginBottom:'1em' }} value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})}  placeholder="输入密码" />
      <Button style={{ marginBottom:'1em' }}  type="primary" block onClick={submit}> 登录 </Button>
      <div>
        注册
        忘记密码
      </div>
    </Card>
  </div>                                                                  
};

export default SignIn;

// export const getServerSideProps: GetServerSideProps = withSession(
//   async (context: GetServerSidePropsContext) => {
//     // @ts-ignore
//     const user = context.req.session.get('currentUser');
//     return {
//       props: {
//         user: JSON.parse(JSON.stringify(user || ''))
//       }
//     };
//   });
