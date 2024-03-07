import React from "react";
import { Card, Flex, Typography, Button } from "antd";

const Banner = () => {
  return (
    <Card style={{height: 300, padding: '20px' }}>
      <Flex vertical gap="30px">
      <Flex vertical align="flex-start">
        <Typography.Title level={2} strong>
          Create and Sell Products
        </Typography.Title>
        <Typography.Title type="secondary" strong>
          Lorem, ipsum sit amet constitue
        </Typography.Title>
      </Flex>
      <Flex gap="large">
        <Button type="primary" size="large">Explore More</Button>
        <Button size="large">Top Sellers</Button>
      </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
