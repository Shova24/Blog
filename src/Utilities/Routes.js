import { Route, Routes } from "react-router-dom";
import PostDetails from "../Components/Post/PostDetails";
import Posts from "../Components/Post/Posts";
import UserDetails from "../Components/User/UserDetails";
import Users from "../Components/User/Users";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:postId" element={<PostDetails />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:UserID" element={<UserDetails />} />
      <Route path="*" element={<>Page Not Found</>} />
    </Routes>
  );
}
