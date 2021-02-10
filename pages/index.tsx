import {GetServerSideProps, NextPage,} from 'next';
import {UAParser} from 'ua-parser-js';
import {useEffect, useState} from 'react';
import { createConnection } from 'typeorm';
import { getDatabaseConnection } from '../lib/getDatabaseConnection'
import { Post } from 'src/entity/Post';
import day from 'dayjs'
import Link from 'next/link';

type Props = {
  posts: Post[],
  browser: {
    name: string;
    version: string;
    major: string;
  }
}
const index: NextPage<Props> = (props) => {
  const {browser, posts} = props;
  console.log(posts)
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const w = document.documentElement.clientWidth;
    setWidth(w);
  }, []);
  console.log()
  const date = (str:Date) =>day(str).format('YYYY-MM-DD: HH:mm')
  return (
    <div>
      {posts.map(post=>
        <div key={post.id}>
          <Link  href={`/posts/${post.id}`}>
            <a>
              <div>{post.title}</div>
            </a>
          </Link>
          <div>{post.content}</div>
          <div>
            创建时间：{date(post.createdAt)}
          </div>
        </div>
        
      )
      }
    </div>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connect = await getDatabaseConnection()
  let posts = await connect.manager.find(Post)
  posts = JSON.parse(JSON.stringify(posts))
  const ua = context.req.headers['user-agent'];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser,
      posts
    }
  };
};
