import { Card, Row, Col, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <Card style={{ borderRadius: "15px", margin: "10px" }}>
      <Row gutter={(4, 8)} justify="center">
        <Col span={24}>{post.id}</Col>
        <Col span={24}>{post.title}</Col>
        <Col span={24}>{post.body}</Col>
      </Row>
      <Row justify="end">
        <Col span={24}>
          <Button>
            <Link to={`/${post.id}`}>Click</Link>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
