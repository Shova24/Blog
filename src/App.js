import { Col, Row, Tabs, Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Posts from "./Components/Post/Posts";
import Users from "./Components/User/Users";
import AppRoutes from "./Utilities/Routes";

function App() {
  return (
    <>
      <Menu mode="horizontal" style={{ display: "flex", justifyContent: "center" }}>
        <Menu.Item>
          <Link to={"/"}>Posts</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/users"}>Users</Link>
        </Menu.Item>
      </Menu>
      <Routes>
        <Route path="*" element={<AppRoutes />} />
      </Routes>
    </>
  );
}

export default App;
