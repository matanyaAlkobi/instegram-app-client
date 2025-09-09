import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/application-layout/appLayout.tsx";
import AllpostsPage from "./pages/AllPostsPage.tsx";
import GetPostByID from "./pages/PostSearchPage.tsx";
import PostPage from "./pages/postPage.tsx";
import CreateAPostPage from "./pages/CreateAPostPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<AllpostsPage />} />
        <Route path="/postsearch" element={<GetPostByID />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/createPost" element={<CreateAPostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
