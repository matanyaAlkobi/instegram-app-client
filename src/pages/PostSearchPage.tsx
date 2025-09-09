import React, { useRef, useState } from "react";
import { fetchPostById } from "../controller/post.controller";
import PostCreator from "../components/PostCreator";
import type { Post } from "../interfaces/Post";
import "../styles/postSearchPage.css";

// A function that presents the client with an input box for entering an id and a submit button.
export default function GetPostByID() {
// Saving variables in useref and usestate for use on the page
  const idToSearcRef = useRef<HTMLInputElement>(null);
  const [theRequestedPost, setTheRequestedPost] = useState<Post>();
  const [isTryingToSearch, setIsTryingToSearch] = useState<boolean>(false);

// callback that sends the id received from the client to the function that does the fetch
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setTheRequestedPost(await fetchPostById(idToSearcRef.current?.value));
      setIsTryingToSearch(true);
    } catch (err: any) {
      console.error("Error finding the riddle ", err);
    }
  };
  return (
    <>
      <div className="post-search-page">
        <h3>Enter a post ID and we'll find it for you.</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            ref={idToSearcRef}
            type="text"
            className="idSearcher-input"
            placeholder="Please enter a post ID."
            required
          />
          <button type="submit">search</button>
        </form>
        {isTryingToSearch && (
          <div>
            {theRequestedPost ? (
              <PostCreator post={theRequestedPost} />
            ) : (
              <p className="Error">We were unable to find the requested post.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
