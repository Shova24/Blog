import { Card, Form, Input, Button, Row, Col, Typography, Divider } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const { Title, Text } = Typography;
const { TextArea } = Input;
export default function UserDetails() {
  const [form] = Form.useForm();
  const { UserID } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  // console.log(user);

  return (
    <>
      <Row justify="space-between" style={{ margin: "20px" }}>
        {/* Add Post  */}
        <Col span={15}>
          <Card style={{ borderRadius: "15px" }}>
            <Form form={form}>
              <Row>
                <Col xs={24}>
                  <Form.Item>
                    {/* <Input /> */}
                    <TextArea />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="end">
                <Button>Add Post</Button>
              </Row>
            </Form>
          </Card>
        </Col>
        {/* Profile Card   */}
        <Col span={8} style={{ borderRadius: "15px" }}>
          <Card style={{ borderRadius: "15px", padding: "5px" }}>
            <Title level={3}>{user?.name}</Title>
            <Divider>{user?.company?.name}</Divider>
            <Col span={24}>
              <Text>{user?.email}</Text>
            </Col>
            <Col span={24}>
              <Text>{user?.phone}</Text>
            </Col>
          </Card>
        </Col>
      </Row>
      {/* posts of this user */}
    </>
  );
}
