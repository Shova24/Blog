import { Card, Row, Col, Button } from "antd";
import React from "react";

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
          <Button> Click</Button>
        </Col>
      </Row>
    </Card>
  );
}
