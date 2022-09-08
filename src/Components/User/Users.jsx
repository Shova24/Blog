import { Button, Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User from "./User";

export default function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "User Name",
      dataIndex: "username",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => (
        <Button shape="round">
          <Link to={`/users/${user[0].id}`}>Details</Link>
        </Button>
      ),
    },
  ];
  console.log(user);
  return <Table style={{ borderRadius: "20px", margin: "50px" }} columns={columns} dataSource={user} />;
}
