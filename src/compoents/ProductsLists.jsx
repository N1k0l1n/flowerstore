import React from "react";
import { Flex, Typography, Button } from "antd";

const ProductsLists = () => {

  return (
    <div>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3} strong className="primary-color">
          My Listing
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
    </div>
  );
};

export default ProductsLists;
