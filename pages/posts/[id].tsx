import {GetServerSideProps, NextPage} from 'next';
import Link from 'next/link'
import getDatabaseConnection from "../../lib/getDatabaseConnection";
import { Post }from "../../src/entity/Post";

type Props = {
  post: Post
}
const id: NextPage<Props> = (props) => {
  const { post } = props
  return (
    <div>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{__html:post.content}} />
    </div>
  );
};
export default id;

export const getServerSideProps: GetServerSideProps<any, {id: string}> = async (context) => {
  const commention =  await getDatabaseConnection()
  const post = await  commention.manager.findOne('posts', context.params.id)
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  };
};