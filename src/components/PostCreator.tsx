import GetImage from "./GetImage.tsx";
import "../styles/post.css";
import { type Post } from "../interfaces/Post.ts";

export default function PostCreator({ post }: { post: Post }) {
  console.log("post: ",post)
  return (
    <>
    
      <div className="post" key={post.id}>
        <h3>{post.username}</h3>
        <GetImage imgSrc={post.image} />
        <div className="time-and-like">
          <p className="like">♡ {post.likes}</p>
          <p className="time">{post.timeAndHour}</p>
        </div>
        <p>{post.imageDescription}</p>
      </div>
    </>
  );
}
