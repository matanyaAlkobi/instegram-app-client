import { useEffect, useState } from "react";
import { getPostHandler } from "../controller/post.controller";
import PostCreator from "../components/PostCreator";
import { type Post } from "../interfaces/Post";

export default  function PostsPage(){
      const [posts, setPosts] = useState<Post[]>([]);
      useEffect(() => {
        const fetchPosts = async () => {
          const data = await getPostHandler();
          setPosts(data);
          console.log(data);
        };
        fetchPosts();
      }, []);
    return(
    <>
    <div className="posts-page">
        {posts.map((post)=>
        (
            <PostCreator post={post}/>
        )
        )}
    </div>
    </>)
}