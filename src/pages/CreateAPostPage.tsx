import { useRef, useState } from "react";
import { createPostHandler } from "../controller/post.controller";
import type { newPost, Post } from "../interfaces/Post.interface";
import PostCreator from "../components/PostCreator";

// A function that displays the Create a Post page for a customer
export default function CreateAPostPage() {
  // Saves the input the user entered.
  const usernameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const imageDescriptionRef = useRef<HTMLInputElement>(null);
  //Saves the new post and refreshes the page.
  const [newPost, setNewPost] = useState<Post>();
  //Says the user clicked a post upload button
  const [isTryingToCreate, setIsTryingToCreate] = useState<boolean>(false);

// An arrow function that when the button is clicked creates an object of the information
// Calls a function that fetches the server and passes it the new post
// Changes isTryingToCreate to true
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postToUpload: newPost = {
        username: usernameRef.current?.value,
        image: imageRef.current?.value,
        imageDescription: imageDescriptionRef.current?.value,
      };
      setNewPost(await createPostHandler(postToUpload));
      setIsTryingToCreate(true);
    } catch (err) {
      console.error("Error creating the post ", err);
    }
  };

  return (
    <>
      <div className="create-a-post-page">
        <h3>Upload a post and share with the world</h3>
        <form onSubmit={handleSubmit}>
          <input
            ref={usernameRef}
            type="text"
            className="create-post-input"
            placeholder="Please enter your name."
            required
          />
          <input
            ref={imageRef}
            type="text"
            className="create-post-input"
            placeholder="Please Enter the image url."
            required
          />
          <input
            ref={imageDescriptionRef}
            type="text"
            className="create-post-input"
            placeholder="Please Share in the image description."
            required
          />
          <button type="submit">upload</button>
        </form>
        {isTryingToCreate && (
          <div>
            {newPost ? (
              <PostCreator post={newPost} />
            ) : (
              <p className="Error">We were unable to create the post.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
