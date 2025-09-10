const API_BASE = import.meta.env.VITE_API_URL;

export type AuthResponse = {
  username: string;
  role?: string;
  message?: string;
  error?: string;
};

export async function loginUser(username: string, password: string) {
  try {

    const res = await fetch(`${API_BASE}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    console.log("Response status:", res.status);

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const data: AuthResponse = await res.json();
    console.log("Login successful:", data);

    return data;
  } catch (err: any) {
    console.error("Fetch error:", err.message);
    throw err;
  }
}

export async function signupUser(
  username: string,
  password: string,
  email?: string
) {
  try {
    const res = await fetch(`${API_BASE}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email }),
    });
    return res.json();
  } catch (error) {
    console.error("Error creating user ");
  }
}
