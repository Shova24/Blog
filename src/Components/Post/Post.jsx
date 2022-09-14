import React, { useState } from "react";
import { Form, Card, Row, Col, Button, Tag, Typography, Divider, Modal, Input, Popconfirm, notification } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { TextArea } = Input;
const { Title } = Typography;
const openNotification = (title) => {
  notification.open({
    message: title,
  });
};

export default function Post({ post, posts, setPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(openNotification("Delete"));

  const [form] = Form.useForm();
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
    openNotification("Task Has Been Deleted");
    console.log("Deleted Item ID : ", postId);
  };

  const editPost = (item) => {
    form.setFieldsValue({
      title: item.title,
      body: item.body,
      userID: item.userId,
    });
    setIsModalOpen(true);

    // console.log(item);
  };
  const updatePost = (values) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        id: post.id,
        title: values.title,
        body: values.body,
        userId: values.userID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const edit = posts.filter((el) => el.id !== post.id);
        setPost([json, ...edit]);
      });

    setIsModalOpen(false);
  };
  return (
    <Card style={{ borderRadius: "15px", margin: "10px" }}>
      <Modal open={isModalOpen} onOk={updatePost} footer={null} closable={false}>
        <Card style={{ borderRadius: "15px", margin: "10px" }}>
          <Form form={form} onFinish={updatePost}>
            {/* <Form.Item name="userID" label="User ID">
              <Input />
            </Form.Item> */}
            <Form.Item name="title" label="Post Title">
              <Input />
            </Form.Item>
            <Form.Item name="body" label="Post Body">
              <TextArea />
            </Form.Item>
            <Row justify="end">
              <Button htmlType="submit">Submit</Button>
            </Row>
          </Form>
        </Card>
      </Modal>
      <Row justify="space-between">
        <Col>
          <Tag color="geekblue" style={{ padding: "2px 24px 2px 24px" }}>
            {post.id}
          </Tag>
        </Col>
        <Col>
          <Popconfirm title="Do you want to delete the post?" onConfirm={() => deletePost(post.id)} okText="Yes" cancelText="No">
            <CloseOutlined style={{ marginRight: "10px" }} />
          </Popconfirm>
          {/* <CloseOutlined style={{ marginRight: "10px" }} onClick={() => deletePost(post.id)} /> */}
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
