import { Card, Row, Col, Button, Tag, Typography, Divider, Modal, Form, Input } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalComp from "../Shared/ModalComp";

export default function Post({ post, posts, setPost }) {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const editPost = (item) => {
    form.setFieldsValue({
      title: item.title,
      body: item.body,
      userID: item.userId,
    });
    setIsModalOpen(true);

    console.log(item);
  };
  const updatePost = () => {
    console.log("Update Item");
    setIsModalOpen(false);
  };
  return (
    <Card style={{ borderRadius: "15px", margin: "10px" }}>
      <Modal form={form} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} closable={false}>
        <Card style={{ borderRadius: "15px", margin: "10px" }}>
          <Form form={form} onFinish={updatePost}>
            <Form.Item name="userID" label="User ID">
              <Input />
            </Form.Item>
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
