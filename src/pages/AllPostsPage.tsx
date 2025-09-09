import { useEffect, useState } from "react";
import { getPostHandler } from "../controller/post.controller";
import PostCreator from "../components/PostCreator";
import { type Post } from "../interfaces/Post.interface";
import "../styles/allPostsPage.css"

// Calls the function getPostHandler that fetches the posts,
// and creates posts in a loop by calling the function PostCreator
export default  function PostsPage(){
      const [posts, setPosts] = useState<Post[]>([]);
      useEffect(() => {
        const fetchPosts = async () => {
          const AllPosts = await getPostHandler();
          setPosts(AllPosts);
        };
        fetchPosts();
      }, []);
    return(
    <>
    <div className="posts-page">
      
        {posts.length > 0? posts.map((post)=>
        (
            <PostCreator post={post}/>
        )
        ):<h3>Error!!!, we were unable to connect to the server. Try again.</h3>}
    </div>
    </>)
}