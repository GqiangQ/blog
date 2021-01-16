import { NextPage } from "next";
import { usePosts } from "../../hooks/usePosts";



const PostsIndex: NextPage = () => {
  const { loading, posts:Post } = usePosts()
  return (
    <div>
      <h1>文章列表</h1>
    </div>
  );
};
export default PostsIndex