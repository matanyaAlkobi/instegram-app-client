// const API_BASE = import.meta.env.VITE_API_URL;

export async function getPostHandler() {
  try {
    const response = await fetch(`/DB/postsDB.json`,);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const allPosts = await response.json();
    return allPosts;
  } catch (err:any) {
    console.error("Error fetching posts:", err.message);
    return [];
  }
}