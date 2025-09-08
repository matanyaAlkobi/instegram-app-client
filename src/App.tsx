import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/application-layout/appLayout";
import PostsPage from "./pages/PostsPage";
import GetAppSlogen from "./components/application-layout/appSlogan";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/"></Route>
           
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/ss" element={<GetAppSlogen />} />

        </Route>
      </Routes>

  );
}

export default App;
