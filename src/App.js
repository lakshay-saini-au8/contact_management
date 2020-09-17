import React, { useState } from "react";
import { Button, Layout, Table, Space } from "antd";
import "./App.css";
import { DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import AddDrawer from "./Drawer";
import { connect } from "react-redux";
import { addContact, delContact } from "./redux/actions/contactAction";
const { Header, Content, Footer, Sider } = Layout;

function App({ addContact, contact, count, delContact }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});

  const handleAddFormOnFinish = (values) => {
    addContact(values);
    setValues((prevValues) => [
      ...prevValues,
      {
        key: prevValues.length + 1,
        ...values,
      },
    ]);
    setShowDrawer(false);
  };
  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<DeleteOutlined />}
            onClick={() => delContact(record.key)}
            data-id={record.key}
          ></Button>
        </Space>
      ),
    },
  ];

  console.log("values", values);
  console.log("error", errorInfo);
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed((prevValue) => !prevValue)}
        >
          <div className="logo" title="Contact Management" />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, background: "#fff" }}
          />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
                <div style={{ fontWeight: "bold" }}>Count: {count}</div>
                <Button
                  type="primary"
                  icon={<PlusCircleFilled />}
                  data-testid="add-contact-button"
                  onClick={() => setShowDrawer(true)}
                >
                  Add
                </Button>
              </div>
              <AddDrawer
                show={showDrawer}
                handleOnClose={() => setShowDrawer(false)}
                onFinish={handleAddFormOnFinish}
                onFinishFailed={handleAddFormOnFinishFailed}
              />

              <Layout.Content>
                <Table dataSource={contact} columns={columns} />
              </Layout.Content>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Contact Management ©2020 Created by Lakshay Saini
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contact: state.contactsState.allContacts,
  count: state.contactsState.count,
});

export default connect(mapStateToProps, { addContact, delContact })(App);
