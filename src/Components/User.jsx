import { Card, Row, Col } from "antd";
import React from "react";

export default function User({ user }) {
  return (
    <>
      <Card style={{ borderRadius: "15px", margin: "10px" }}>
        <Row>
          <Col span={24} style={{ paddingRight: "10px" }}>
            User ID
          </Col>
          <Col span={24} style={{ paddingRight: "10px" }}>
            User Name
          </Col>
          <Col span={24} style={{ paddingRight: "10px" }}>
            Email
          </Col>
          <Col span={24} style={{ paddingRight: "10px" }}></Col>
        </Row>
      </Card>
    </>
  );
}
