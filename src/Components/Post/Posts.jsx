import { useEffect, useState } from "react";
import { Col, Row, Spin } from "antd";
import Post from "./Post";
import { useContext } from "react";
import BlogContext from "../../Utilities/Context";
export default function Posts() {
  // const [post, setPost] = useState([]);
  const { post, setPost, getPosts, showLoader } = useContext(BlogContext);
  useEffect(() => {
    getPosts();
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => setPost(data));
  }, []);

  return (
    <>
      {showLoader && (
        <Row justify="center" style={{ marginTop: "20em" }}>
          <Spin ize="large" />
        </Row>
      )}

      <Row>
        {post.map((el) => (
          <Col key={el.id} span={24} md={12} lg={8}>
            <Post post={el} posts={post} setPost={setPost} />
          </Col>
        ))}
      </Row>
    </>
  );
}
