import React from 'react'
import { Flex } from 'antd'
import Banner from './Banner'

const MainContent = () => {
  return (
    <div style={{flex: 1}}>
      <Flex vertical gap="2.3em">
        <Banner/>
      </Flex>
    </div>
  )
}

export default MainContent