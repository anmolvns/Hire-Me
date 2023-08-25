
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./routes/routes";
import AllPosts from "./pages/AllPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.create} element={<CreatePost />} />
        <Route path={routePath.posts} element={<AllPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
