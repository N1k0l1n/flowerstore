import React from 'react'
import {Flex} from 'antd'
import ContentSidebar from './ContentSidebar';
import Activity from './Activity';

const SideContent = () => {

  return (
    <Flex vertical gap="2.3em" style={{width: 300}}>
      <ContentSidebar/>
      <Activity/>
    </Flex >
  )
}

export default SideContent