import { Route, Routes } from "react-router-dom";

import PostDetails from "../Components/Post/PostDetails";
import Posts from "../Components/Posts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="posts" element={<Posts />}>
        <Route path=":postID" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}
