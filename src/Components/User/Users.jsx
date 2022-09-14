import { Button, Table, Spin, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogContext from "../../Utilities/Context";

export default function Users() {
  const { showLoader, user, getUsers } = useContext(blogContext);
  // const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setUser(
    //       data.map((el) => ({
    //         ...el,
    //         key: el.id,
    //       }))
    //     );
    //   });
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

  return (
    <>
      {showLoader && (
        <Row justify="center" style={{ marginTop: "20em" }}>
          <Spin ize="large" />
        </Row>
      )}
      <Table style={{ borderRadius: "20px", margin: "50px" }} columns={columns} dataSource={user} />;
    </>
  );
}
