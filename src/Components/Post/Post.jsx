import { Card, Row, Col, Button, Tag, Typography, Divider } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post, posts, setPost }) {
  const { Title } = Typography;
  const deletePost = async (postId) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/1${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setPost(
            posts.filter((el) => {
              return el.id !== postId;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Deleted Item ID : ", postId);
  };
  const editPost = (item) => {
    console.log(item);
  };
  return (
    <Card style={{ borderRadius: "15px", margin: "10px" }}>
      <Row justify="space-between">
        <Col>
          <Tag color="geekblue" style={{ padding: "2px 24px 2px 24px" }}>
            {post.id}
          </Tag>
        </Col>
        <Col>
          <CloseOutlined style={{ marginRight: "10px" }} onClick={() => deletePost(post.id)} />
          <EditOutlined onClick={() => editPost(post)} />
        </Col>
      </Row>

      <Row justify="center" style={{ height: "90px", margin: "10px", padding: "10px", overflow: "hidden" }}>
        <Title level={2}>{post.title}</Title>
      </Row>
      <Divider orientation="center">
        <Button shape="round">
          <Link to={`/posts/${post.id}`}>View Details</Link>
        </Button>
      </Divider>
    </Card>
  );
}
