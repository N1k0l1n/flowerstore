import React, { useState } from "react";
import { Button, Layout, Flex } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import SideContent  from "./SideContent";
import CustomHeader from "./Header";
import { Routes, Route } from "react-router-dom";
import Plants from "./Plants";

const { Sider, Header, Content } = Layout;

const Nav = () => {
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
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <Routes>
              <Route path="/dashboard" element={<MainContent />} />
              <Route path="/dashboard" element={<SideContent/>} />
              <Route path="/todo" element={<Plants/>} />
              {/* Add more routes here */}
            </Routes>
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Nav;
