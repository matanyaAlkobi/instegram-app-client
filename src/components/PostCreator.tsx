const API_BASE = import.meta.env.VITE_API_URL;
import GetImage from "./GetImage.tsx";
import "../styles/post.css";
import { type Post } from "../interfaces/Post.interface.ts";
import { useNavigate } from "react-router";

//Handles post creation and returns them
export default function PostCreator({ post }: { post: Post }) {
  const navigate =  useNavigate()
  return (
    <>
      <div className="post" key={post.id} onClick={()=> navigate(`/posts/${post.id}`)}>
        <h3>{post.username}</h3>
        <GetImage imgSrc={`${API_BASE}/${post.image}`} alt={post.imagemame} />
        <div className="time-and-like">
          <p className="like">♡ {post.likes}</p>
          <p className="time">{post.timeAndHour}</p>
        </div>
        <p className="imageDescription">{post.imageDescription}</p>
      </div>
    </>
  );
}
