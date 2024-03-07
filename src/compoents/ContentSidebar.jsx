import React from "react";
import { Card, Flex, Typography, Image } from "antd";

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4}>
            Today <br /> 5 orders
          </Typography.Title>
          <Typography.Title level={4}>
            This Month <br /> 240 orders
          </Typography.Title>
        </Flex>
        <Image
          src=""
          alt="plant"
          style={{
            position: "absolute",
            bottom: -50,
            left: -12,
            height: "300px",
            width: "auto",
          }}
        />
      </Card>
    </div>
  );
};

export default ContentSidebar;
