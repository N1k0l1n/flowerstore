import React from 'react'
import { useRecoilState } from 'recoil'
import { plantState } from '../state/atoms/PlantState'
import { Table, Button } from "antd";

// const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//   ];
  

const Plants = () => {

    const [plants, setPlants] = useRecoilState(plantState) // this hook takes atom/selector

    function addPlant(){
        setPlants((prevPlants) => [...prevPlants, {id: Math.random() }])
    }

  return (
    <div>
        <Button>Add Plant</Button>
        <Button>Clear Plants</Button>
        {/* <Table dataSource={dataSource} columns={columns} />; */}
    </div>
  )
}

export default Plants