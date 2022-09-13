import { Button, Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User from "./User";

export default function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      key: "username",
      title: "User Name",
      dataIndex: "username",
      width: 150,
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "phone",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "operation",
      title: "Action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <Button shape="round">
          <Link to={`/users/${record.id}`}>Details</Link>
        </Button>
      ),
    },
  ];

  return <Table style={{ borderRadius: "20px", margin: "50px" }} columns={columns} dataSource={user} />;
}
