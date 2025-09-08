import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/application-layout/appLayout";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/posts" element={<PostsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
