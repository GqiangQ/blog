import {GetServerSideProps, NextPage,} from 'next';
import {UAParser} from 'ua-parser-js';
import {useEffect, useState} from 'react';
import { MessageOutline, LikeOutline } from '@ant-design/icons';
import { getDatabaseConnection } from '../lib/getDatabaseConnection'
import { Post } from 'src/entity/Post';
import day from 'dayjs'
import Link from 'next/link';
import Top from 'components/top'
import { Pagination  } from "antd"
import Axios from 'axios';
import qs from 'querystring'
import { User } from 'src/entity/User';


type Props = {
  posts: Post[],
  current:number,
  total:number,
  pageSize:number
}
const index: NextPage<Props> = (props) => {
  const { posts, current=1, total=10, pageSize=10} = props;
  const date = (str:Date) =>day(str).format('YYYY-MM-DD: HH:mm')
  const [pageOption, setPageOption] = useState({
    current,
    total,
    pageSize,
    pageSizeOptions:[1,10, 20, 50, 100]
  })
  console.log(pageOption)
  const pageChange = (...Option:any ) =>{
    const [ current,pageSize ] =Option
    setPageOption({
      ...pageOption,
      current,
      pageSize
    })
    window.location.href = `/?current=${current}&pageSize=${pageSize}`
  }
  
  return (
    <div style={{minWidth:'960px',overflow:'auto'}} >
      <Top/>
      <div style={{maxWidth: '960px',margin: '70px auto',}}>
        <div>
          {posts.map(post=>
            <div key={post.id} style={{background:'#fff',padding:'1em 1.2em',borderBottom:'1px solid #f5f6f7',}}>
              <div style={{color:'#b3bbcd'}}><span>作者</span>| <span>{date(post.createdAt)}</span></div>
              <h2 style={{margin:'0',cursor: 'pointer',display:'inline-block'}}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              {/* <div>{post.content}</div> */}
              <div style={{display: 'flex',justifyContent:'flex-end'}}>
                {/* <LikeOutline />
                <MessageOutline /> */}
              </div>
            </div>
          )}
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '.2em', padding: '1em', background: '#fff',}}>
          <Pagination total={pageOption.total} current={pageOption.current} pageSize={pageOption.pageSize} onChange={pageChange}/>
        </div>
      </div>
    </div>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pageSize=10,type='home',current=1} = context.query
  if (type === 'home'){

  } else {

  }
  const connect = await getDatabaseConnection()
  let [posts,total] = await connect.manager.findAndCount(Post, {skip:(+current-1)*+pageSize, take:+pageSize})
  posts = JSON.parse(JSON.stringify(posts))
  return {
    props: {
      posts,
      current:+current,
      pageSize:+pageSize,
      total:total

    }
  };
};
