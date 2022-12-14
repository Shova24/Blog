import { Card, Form, Input, Button, Row, Col, Typography, Divider } from "antd";
import { CloseOutlined, EditOutlined, LeftOutlined } from "@ant-design/icons";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import BlogContext from "../../Utilities/Context";
import Post from "../Post/Post";
const { Title, Text } = Typography;
const { TextArea } = Input;

export default function UserDetails() {
  const { post, setPost, getPosts } = useContext(BlogContext);
  const [form] = Form.useForm();
  const { UserID } = useParams();
  const [user, setUser] = useState({});
  // console.log(post);
  useEffect(() => {
    getPosts();
    fetch(`https://jsonplaceholder.typicode.com/users/${UserID}`)
      .then((response) => response.json())
      .then((data) => {
        data = { key: data.id, ...data };
        setUser(data);
      });
  }, []);

  const addPost = async (values) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        // id: Math.floor(Math.random()) + 100,
        id: uuidv4(),
        title: values.title,
        body: values.body,
        userId: UserID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    setPost([data, ...post]);
    form.resetFields();

    // .then((response) => response.json())
    // .then((json) => {
    //   // console.log(json);
    //   setPost([json, ...post]);
    // });
  };

  return (
    <>
      <Row style={{ marginLeft: "20px" }}>
        <Link to="/users">
          <span>
            <LeftOutlined />
          </span>
          <span>Back</span>
        </Link>
      </Row>

      <Row gutter={[16, 16]} style={{ backgroundColor: "lightblue", padding: "10px" }}>
        <Col md={12} xs={24}>
          <Card style={{ borderRadius: "15px" }}>
            <Form form={form} onFinish={addPost}>
              <Row>
                <Col xs={24}>
                  <Form.Item name="title" label="Title : ">
                    <Input></Input>
                  </Form.Item>
                  <Form.Item name="body">
                    <TextArea placeholder="write your post" />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="end">
                <Button shape="round" htmlType="submit">
                  Add Post
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col md={12} xs={24}>
          <Card style={{ borderRadius: "15px", padding: "5px" }}>
            {/* <Row justify="end">
              <Link to="/users">
                <EditOutlined />
              </Link>
            </Row> */}
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
