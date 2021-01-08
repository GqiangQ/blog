import { NextPage } from "next";
import { type } from "os";
import { usePosts } from "../../hooks/usePosts";
import { getPosts } from "../../lib/posts";


type Props = {
  posts:Post[]
}

const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props
  return (
    <div>
      <h1>文章列表</h1>
      {
        posts.map(p =><div key={p.id}>{p.title}{p.date}</div>)
      }
    </div> 
  );
};
export default PostsIndex
export const getStaticProps = async() => {
  const posts = await getPosts()
  return {
    props: {posts}
  }
}