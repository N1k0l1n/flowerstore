import "./App.css";
import React, { useState } from "react";
import { Button, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./compoents/Sidebar";
import CustomHeader from "./compoents/Header";
const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider"
        >
          <Sidebar />

          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="triger-btn"
          />
        </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content"></Content>
      </Layout>
    </Layout>
  );
}

export default App;
