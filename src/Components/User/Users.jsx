import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <Row>
      {user.map((el) => (
        <Col key={el.id} span={24}>
          <User user={el} />
        </Col>
      ))}
    </Row>
  );
}
