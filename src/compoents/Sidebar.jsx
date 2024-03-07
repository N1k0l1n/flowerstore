import React from 'react'
import { Flex , Menu} from 'antd'
import { FaLeaf } from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <>
    <Flex align='center' justify='center'>
        <div className='logo'>
            <FaLeaf/>
        </div>
    </Flex>
    <Menu mode='inline' defaultSelectedKeys={['1']} className='menu-bar'/>
    </>
  )
}

export default Sidebar