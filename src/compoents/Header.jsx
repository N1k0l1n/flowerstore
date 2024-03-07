import { Flex, Typography, Avatar } from 'antd'
import Search from 'antd/es/transfer/search'
import React from 'react'
import {MessageOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons'

const CustomHeader = () => {
  return (
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3} type='secondary'>
            Welcome back, John
        </Typography.Title>

        <Flex align='center' gap="3rem">
            <Search placeholder='Search Dashboard' allowClear/>

            <Flex align='center' gap="10px">
                <MessageOutlined className='header-icon'/>
                <NotificationOutlined />
                <Avatar icon={<UserOutlined/>}/>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default CustomHeader