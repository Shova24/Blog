import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Post from "./Post";
import { useContext } from "react";
import BlogContext from "../../Utilities/Context";
export default function Posts() {
  // const [post, setPost] = useState([]);
  const { post, setPost } = useContext(BlogContext);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <Row>
      {post.map((el) => (
        <Col key={el.id} span={24} md={12} lg={8}>
          <Post post={el} posts={post} setPost={setPost} />
        </Col>
      ))}
    </Row>
  );
}
