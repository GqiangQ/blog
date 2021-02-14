import {GetServerSideProps, NextPage,} from 'next';
import {UAParser} from 'ua-parser-js';
import {useEffect, useState} from 'react';
import { createConnection } from 'typeorm';
import { getDatabaseConnection } from '../lib/getDatabaseConnection'
import { Post } from 'src/entity/Post';
import { Input,Popover,Button } from 'antd';
const { Search } = Input
import day from 'dayjs'
import Link from 'next/link';

const Top = () => {
  const typeClick = (a:string) =>{
    console.log(a)
  }
  useEffect(()=>{
    console.log('window')
  },[])
  return (
    <div style={{width: '100vw',top:'0',background:'#fff', position: 'fixed',marginBottom:'5px',padding:' 12px 8px',boxShadow: '0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%),1px 2px 5px 2px rgb(0 0 0 / 9%)'}}>
      <div style={{width: '960px',display:'flex',justifyContent:'space-between',margin: 'auto'}}>
        <span>logo</span>
        <div>
          <Button type="link" href="/?type=home">首页</Button>
          <Button type="link" href="/?type=follow">关注</Button>
        </div>
        <Search placeholder="input search text" style={{ width: 300 }}  enterButton />
        <Button type="link" href="/posts/add">写博客</Button>
        <div>
          <Popover placement="bottomRight" trigger="hover"
            content={<div>
              <p>Content</p>
              <p>退出</p>
            </div>}
          >
            我的中心
            <img src="" alt=""/>
          </Popover>
          </div>
      </div>
    </div>
  );
};
export default Top;
