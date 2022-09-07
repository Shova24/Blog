import { Col, Row, Tabs } from "antd";
import { useEffect, useState } from "react";
import Post from "./Components/Post";
import User from "./Components/User";

function App() {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="Posts" key="1">
          <Row>
            {post.map((el) => (
              <Col key={el.id} span={24} md={12} lg={8}>
                <Post post={el} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Users" key="2">
          <Row>
            {user.map((el) => (
              <Col key={el.id} span={24}>
                <User user={el} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}

export default App;
