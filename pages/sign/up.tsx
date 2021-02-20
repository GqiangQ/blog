import {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { Input, Card, Button,message,  } from 'antd';
import md5 from 'md5';
const { Search } = Input;
const SignIn: NextPage = (props) => {
  const [form,setForm] = useState({
    password: '',
    passwordAgain:'',
    username: '',
    email: '740407980@qq.com',
    code: '',

  })
  const send = ()=>{
    if (seeding.status) return
    axios.post('/api/v1/seedcode/code',{email:form.email}).then((res: any)=>{
    })
    setSeeding({
      status:true,
      num:60,
      button:<Button ghost >{seeding.num} s后发送验证码 </Button>
    })
    const itmeId = setInterval(()=>{
      if(seeding.num === 0){
        clearInterval(itmeId)
        setSeeding({
          status:false,
          num:60,
          button:<Button ghost type="primary"> 发送验证码 </Button>
        })
      } else{
        setSeeding({
          status:true,
          num:--seeding.num,
          button:<Button ghost >{seeding.num} s后发送验证码 </Button>
        })
      }
    },1000)

    // setSeeding({...seeding,status:!seeding.status})
  }
  const [seeding,setSeeding] = useState({
    status:false,
    num:60,
    button:<Button ghost type="primary"> 发送验证码 </Button>
  }) 
  const submit = () => {
    if (!form.password || !form.passwordAgain||!form.username||!form.email||!form.code) return message.info('信息不能为空！')
    if (!/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(form.email)) return message.info('邮箱不正确！')
    if (form.password !== form.passwordAgain) return message.info('两次密码不一致！')
    axios.post('/api/v1/user/up',{
      ...form,
      password: md5(form.password),
      passwordAgain: md5(form.passwordAgain)
    }).then(({status,data,...a}) =>{
      if(status !== 200) return message.error('xc')
      if(data.code) {
        message.success(data.msg)
        window.location.href='/sign/in'
      } else {
        message.error(data.msg)
      }
    })
  }
  // const seendBtn = () =>{
  //   if(seeding.status) return<Button ghost type="primary" onClick={send}> 发送验证码 </Button>
  //   else return<Button ghost onClick={send}> s 后重新发送 </Button>
  // } 

  
  return<div style={{width: '100vw', height:'100vh'}} >
    <Card style={{width: '350px', position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} hoverable>
      <h1 style={{ textAlign:'center' }}>注册</h1>
      <Input style={{ marginBottom:'1em' }} value={form.username} onChange={(e)=>setForm({...form, username:e.target.value})} placeholder="输入用户名" allowClear />
      <Input.Password style={{ marginBottom:'1em' }} value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})}  placeholder="输入密码" />
      <Input.Password style={{ marginBottom:'1em' }} value={form.passwordAgain} onChange={(e)=>setForm({...form, passwordAgain:e.target.value})}  placeholder="确认密码密码" />
      <Input style={{ marginBottom:'1em' }} value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="输入邮箱" allowClear />
      <div style={{ marginBottom:'1em',display:'flex' }}>
        <Input style={{ marginBottom:'1em',marginRight:'.5em' }} maxLength={6} value={form.code} onChange={(e)=>setForm({...form, code:e.target.value})}/>
        {
          seeding.status?<Button disabled type="dashed">{seeding.num} s后重新发送 </Button>:<Button ghost type="primary" onClick={send}> 发送验证码 </Button>
        }
      </div>
      {/* <Search style={{ marginBottom:'1em' }} maxLength={6} placeholder="输入验证码" onSearch={send} allowClear enterButton={seeding.button} /> */}
      <Button style={{ marginBottom:'1em' }} type="primary"  block onClick={submit}> 注册 </Button>
      <div>
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
