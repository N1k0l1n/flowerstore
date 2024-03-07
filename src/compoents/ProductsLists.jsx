import React from 'react'
import {Flex, Typography, Button, Card} from 'antd'

const ProductsLists = () => {

    const url = process.env.REACT_APP_API_ENDPOINT;
    const plantData= []

  return (
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3} strong className='primary-color'>
            My Listing
        </Typography.Title>
        <Button type='link' className='gray--color'> View All</Button>

        <Flex align="center" gap="large">
            {plantData.map(plant=>(
                <Card key={plant.id} hoverable className='plant-card'>
                    <Image src={plant.picture } style={{width: '130px'}}/>
                </Card>
            ))}
        </Flex>
    </Flex>
  )
}

export default ProductsLists