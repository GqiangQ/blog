import {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next';
// import axios from 'axios';
// import {withSession} from '../lib/withSession';
// import {User} from '../src/entity/User';
// import {useForm} from '../hooks/useForm';
import qs from 'querystring';
import { useState } from 'react';

const SignIn: NextPage = (props) => {
  const [form,setForm] = useState({
    password: '',
    username: ''
  })
  const submit = () => {
  }
  return (
      <div>
        <h1>登录</h1>
        <div><input defaultValue={form.username} onChange={(e:any) =>setForm({ ...form,username:e.target.value })} type="text" placeholder="请输入用户名或邮箱"/></div>
        <div><input defaultValue={form.password} type="password" placeholder="请输入密码"/></div>
        <div><button type="submit" onClick={submit}>登录</button></div>
      </div>
  );
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
