import {GetServerSideProps, NextPage} from 'next';
import {useEffect, useState} from 'react';
import getDatabaseConnection from "../../lib/getDatabaseConnection";
import { Post }from "../../src/entity/Post";

type Props = {
  posts: Post[]
}
const index: NextPage<Props> = (props) => {
  const { posts } = props
  console.log(posts)
  return (<div>
      <h1>文章列表</h1>
      <div>
        {posts.map((item)=><div key={item.id}>{item.title}{item.content}</div>)
        }
      </div>
    </div>)
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const commention =  await getDatabaseConnection()
  let posts = await commention.manager.find('posts')
  posts = JSON.parse(JSON.stringify(posts))
  console.log(posts)
  return {
    props: {
      posts: posts
    }
  };
};