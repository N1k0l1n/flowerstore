import React from 'react'
import {Flex} from 'antd'
import ContentSidebar from './ContentSidebar';

const SideContent = () => {
  return (
    <Flex vertical gap="2.3em" style={{width: 300}}>
      <ContentSidebar/>
    </Flex >
  )
}

export default SideContent