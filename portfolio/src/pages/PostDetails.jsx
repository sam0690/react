import { useParams } from "react-router-dom";
import { posts } from "../data";

export default function PostDetails() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
