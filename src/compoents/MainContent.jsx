import React from 'react'
import { Flex } from 'antd'
import Banner from './Banner'
import ProductsLists from './ProductsLists'
import SellerLists from './SellerLists'

const MainContent = () => {
  return (
    <div style={{flex: 1}}>
      <Flex vertical gap="2.3em">
        <Banner/>
        <ProductsLists/>
        <SellerLists/>
      </Flex>
    </div>
  )
}

export default MainContent