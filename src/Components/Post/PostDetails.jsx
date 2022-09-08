import { Card, Col, Divider, Row, Tag, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
const { Title } = Typography;

export default function PostDetails() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <Card style={{ borderRadius: "15px", margin: "5px" }}>
        <Row justify="start">
          <Col style={{ marginRight: "15px" }}>
            <ArrowLeftOutlined
              onClick={() => {
                navigate("/");
              }}
            />
          </Col>
          <Col>
            <Tag color="geekblue" style={{ padding: "2px 24px 2px 24px" }}>
              {post.id}
            </Tag>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Title level={3}>{post.title}</Title>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col>{post.body}</Col>
        </Row>
        <Row justify="end">{post.userId}</Row>
      </Card>
      <Card style={{ margin: "8px 16px 0px 16px", borderRadius: "15px" }}>
        <Comments />
      </Card>
    </>
  );
}
