import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Post from "./Post";

export default function Posts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <Row>
      {post.map((el) => (
        <Col key={el.id} span={24} md={12} lg={8}>
          <Post post={el} />
        </Col>
      ))}
    </Row>
  );
}
