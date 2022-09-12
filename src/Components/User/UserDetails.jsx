import { Card, Form, Input, Button } from "antd";
import React from "react";

export default function UserDetails() {
  const [form] = Form.useForm();
  return (
    <>
      <Card>
        <Form form={form}>
          <Form.Item>
            <Input />
          </Form.Item>
          <Button>Add Post</Button>
        </Form>
      </Card>
      <div>posts of this user</div>
    </>
  );
}
