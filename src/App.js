import { Col, Row, Tabs } from "antd";
import { useEffect, useState } from "react";
import Posts from "./Components/Post/Posts";
import User from "./Components/User";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="Posts" key="1">
          <Posts />
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
