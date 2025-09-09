import { useRef } from "react";
import { createPostHandler } from "../controller/post.controller";
import type { newPost } from "../interfaces/Post.interface";
export default function CreateAPostPage() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const imageDescriptionRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postToUpload:newPost = {
        username: usernameRef.current?.value,
        image: imageRef.current?.value,
        imageDescription: imageDescriptionRef.current?.value,
      };
      const newPost = await createPostHandler(postToUpload);
      console.log("newPost",newPost)
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
      </div>
    </>
  );
}
