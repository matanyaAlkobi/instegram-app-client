import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/application-layout/appLayout";
import PostsPage from "./pages/PostsPage";
import GetPostByID from "./pages/PostSearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<PostsPage />} />
        <Route path="/postsearch" element={<GetPostByID/>}/>
      </Route>
    </Routes>
  );
}

export default App;
