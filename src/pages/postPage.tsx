import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPostById } from "../controller/post.controller";
import PostCreator from "../components/PostCreator";
import type { Post } from "../interfaces/Post.interface.ts";

// The function retrieves the id using useParams
// calls the function that fetches the server
// and returns the post to the client
export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    const fetchPost = async () => {
      const theRequestedPost = await fetchPostById(id);
      setPost(theRequestedPost);
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className="postpage">
        <h2>Here is the post you wanted. 🤗</h2>
        {post && <PostCreator post={post}/>}
      </div>
    </>
  );
}
