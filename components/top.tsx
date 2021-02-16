import {GetServerSideProps, NextPage,} from 'next';
import {UAParser} from 'ua-parser-js';
import {useEffect, useState} from 'react';
import { createConnection } from 'typeorm';
import { getDatabaseConnection } from '../lib/getDatabaseConnection'
import { Post } from 'src/entity/Post';
import { Input,Popover,Button,Modal  } from 'antd';

const { confirm } = Modal;
const { Search } = Input

const Top = () => {
  const [status,setStatus] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('token')){
      setStatus(true)
    } else {
      setStatus(false)
    }
  })
  const signOut = () =>{
    confirm({
      title: '退出',
      content: '确定要退出吗？',
      onOk() {
        window.localStorage.removeItem('token')
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return (
    <div style={{width: '100vw',top:'0',background:'#fff', position: 'fixed',marginBottom:'5px',padding:' 12px 8px',boxShadow: '0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%),1px 2px 5px 2px rgb(0 0 0 / 9%)'}}>
      <div style={{width: '960px',display:'flex',justifyContent:'space-between',margin: 'auto'}}>
        <span>logo</span>
        <div>
          <Button type="link" href="/?type=home">首页</Button>
          {/* <Button type="link" href="/?type=follow">关注</Button> */}
        </div>
        <Search placeholder="input search text" style={{ width: 300 }}  enterButton />
        {
          status?<Button type="link" href="/posts/add">写博客</Button>:''
        }
        <div style={{lineHeight:'32px'}}>
          {/* <Popover placement="bottomRight" trigger="hover"
            content={<div style={{width:'7em'}} >
            </div>}
          >
          我的中心
          </Popover> */}
          {
            status?<Button type="link" onClick={signOut} block>退出</Button>: <Button type="link" href="/sign/in" block>登录</Button>
          }
        </div>
      </div>
    </div>
  );
};
export default Top;
