import { Card, Row, Col, Button } from "antd";
import React from "react";

export default function Post({ post }) {
  return (
    <Card style={{ borderRadius: "15px", margin: "10px" }}>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          Post ID
        </Col>
        <Col className="gutter-row" span={6}>
          Post Title
        </Col>
        <Col className="gutter-row" span={6}>
          Post Body
        </Col>
        <Col className="gutter-row" span={6}>
          <Button> Click</Button>
        </Col>
      </Row>
    </Card>
  );
}
