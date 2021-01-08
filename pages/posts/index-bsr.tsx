import { NextPage } from "next";
import { usePosts } from "../../hooks/usePosts";



const PostsIndex: NextPage = () => {
  const { loading, posts:Post } = usePosts()
  return (
    <div>
      <h1>文章列表</h1>
      {loading ? <div>加载中</div> :'已跟新'}
      {
        posts.map(p =><div key={p.id}>{p.title}{p.date}</div>)
      }
    </div> 
  );
};
export default PostsIndex