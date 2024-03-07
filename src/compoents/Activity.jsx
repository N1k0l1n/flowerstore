import React from "react";
import { Avatar, Button, Flex, List, Typography } from "antd";

const Activity = () => {

      
  const data = [
    {
      name: 'John',
      orderTime: 3
    },
    {
      name: 'Alice',
      orderTime: 2
    },
    {
      name: 'Michael',
      orderTime: 5
    },
    {
      name: 'Sarah',
      orderTime: 4
    },
    {
      name: 'David',
      orderTime: 1
    }
  ];
  

  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong className="primary--color">
          Recent Activity
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>

      <List pagination dataSource={data} renderItem={(user, index)=> (
        <List.Item>
            <List.Item.Meta avatar={<Avatar src={''}/>}
            title={<a href="#">{user.name}</a>}
            description="Ordered a new plant"
            >
                <span className="gary--color">
                {user.orderTime} {user.orderTime == 1 ? 'day ago' : 'days ago'}
                </span>
            </List.Item.Meta>
        </List.Item>
      )}/>
    </Flex>
  );
};

export default Activity;
