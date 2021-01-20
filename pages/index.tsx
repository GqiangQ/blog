import {GetServerSideProps, NextPage} from 'next';
import Link from 'next/link'
import getDatabaseConnection from "../lib/getDatabaseConnection";
import { Post }from "../src/entity/Post";

type Props = {
  posts: Post[]
}
const index: NextPage<Props> = (props) => {
  const { posts } = props
  console.log(posts)
  return <div>
      <h1>文章列表</h1>
      {posts.map((item) => (
        <Link key={item.id} href={`/posts/${item.id}`}>
          <a>{item.title}</a>
        </Link>))
      }
    </div>
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const commention =  await getDatabaseConnection()
  let posts = await commention.manager.find('posts')
  console.log(JSON.parse(JSON.stringify(posts)))
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};