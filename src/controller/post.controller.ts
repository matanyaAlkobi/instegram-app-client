const API_BASE = import.meta.env.VITE_API_URL;

// Makes a fetch request to the db,
// checks if the data arrived in order and returns it,
// and if no data arrived, returns an empty array
export async function getPostHandler() {
  try {
    console.log("trynig to  fetch ");
    const response = await fetch(`${API_BASE}/post`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const allPosts = await response.json();

    return allPosts;
  } catch (err: any) {
    console.error("Error fetching posts:", err.message);
    return [];
  }
}

// The function receives an id
// sends a fetch request with the received id
// returns the post
export async function fetchPostById(idToFetch: string | undefined) {
  try {
    const response = await fetch(`${API_BASE}/post/${idToFetch}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch post with an id: ${idToFetch}: ${response.status}`
      );
    }
    const theRequestedPost = await response.json();
    return theRequestedPost;
  } catch (err: any) {
    console.error(`Error fetching post with an id: ${idToFetch}:`, err.message);
    return false;
  }
}
