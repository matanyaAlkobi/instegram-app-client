const API_BASE = import.meta.env.VITE_API_URL;

// Makes a fetch request to the db,
// checks if the data arrived in order and returns it,
// and if no data arrived, returns an empty array
export async function getPostHandler() {
  try {
    console.log("trynig to  fetch ")
    const response = await fetch(`${API_BASE}/post`,);
    
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