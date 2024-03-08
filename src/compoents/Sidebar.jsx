import React from "react";
import { Flex, Menu } from "antd";
import { FaLeaf } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  ProfileOutlined,
  LoginOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      key: "2",
      icon: <CarryOutOutlined />,
      label: "My Orders",
      path: "/orders",
    },
    {
      key: "3",
      icon: <OrderedListOutlined />,
      label: "ToDo",
      path: "/todo",
    },
    {
      key: "4",
      icon: <ProfileOutlined />,
      label: "Profile",
      path: "/profile",
    },
    {
      key: "5",
      icon: <SettingOutlined />,
      label: "Settings",
      path: "/settings",
    },
    {
      key: "6",
      icon: <LoginOutlined />,
      label: "LogOut",
      path: "/logout",
    },
  ];

  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
      >
        {menuItems.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            <NavLink
              to={item.path}
            >
              {item.label}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default Sidebar;
