import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/application-layout/appLayout";
import AllpostsPage from "./pages/AllpostsPage.tsx";
import GetPostByID from "./pages/PostSearchPage";
import PostPage from "./pages/postPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<AllpostsPage />} />
        <Route path="/postsearch" element={<GetPostByID/>}/>
        <Route path="/posts/:id" element={<PostPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
