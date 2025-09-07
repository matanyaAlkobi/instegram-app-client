const DB_BASE = import.meta.env.VITE_DB_URL;

// Makes a fetch request to the db,
// checks if the data arrived in order and returns it,
// and if no data arrived, returns an empty array
export async function getPostHandler() {
  try {
    const response = await fetch(`${DB_BASE}`,);
    
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