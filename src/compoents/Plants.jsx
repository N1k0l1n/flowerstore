import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { plantState } from '../state/atoms/PlantState';
import { Table } from "antd";

const Plants = () => {
    const [plants, setPlants] = useRecoilState(plantState);

    useEffect(() => {
      const getPlants = async () => {
        try {
            const url = 'https://perenual.com/api/species-list?key=sk-1K0R65e9bcd98ff784492';
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch plants data: ${response.status} ${response.statusText}`);
            }
            
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Response is not in JSON format');
            }
            
            const data = await response.json();
            setPlants(data.data);
        } catch (error) {
            console.error('Error fetching plants:', error);
        }
    };
    

        getPlants();
    }, [setPlants]);

    // Ensure plants is initialized as an empty array if it's initially null or undefined
    const plantsData = Array.isArray(plants) ? plants : [];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Common Name',
            dataIndex: 'common_name',
            key: 'common_name',
        },
        {
            title: 'Scientific Name',
            dataIndex: 'scientific_name',
            key: 'scientific_name',
            render: scientificNames => scientificNames.join(', '), // Join array elements into a string
        },
        {
            title: 'Cycle',
            dataIndex: 'cycle',
            key: 'cycle',
        },
        {
            title: 'Watering',
            dataIndex: 'watering',
            key: 'watering',
        },
        {
            title: 'Sunlight',
            dataIndex: 'sunlight',
            key: 'sunlight',
        },
        // Add more columns as needed
    ];


    const dataSource = plantsData.map(plant => ({
        key: plant.id,
        id: plant.id,
        common_name: plant.common_name,
        scientific_name: plant.scientific_name,
        cycle: plant.cycle,
        watering: plant.watering,
        sunlight: plant.sunlight,
        // Map other properties as needed
    }));



    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
};

export default Plants;
