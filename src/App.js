import { Tabs } from "antd";
import Post from "./Components/Post";
import User from "./Components/User";

function App() {
  const arr = ["Posts", "Users"];
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="Posts" key="1">
          <Post />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Users" key="2">
          <User />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}

export default App;
