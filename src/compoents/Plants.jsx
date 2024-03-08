import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { plantState } from '../state/atoms/PlantState';
import { Button, Table } from "antd";

const Plants = () => {
    const [plants, setPlants] = useRecoilState(plantState);

    useEffect(() => {
      const getPlants = async () => {
        try {
            const url = 'https://perenual.com/api/species-list?key=sk-1K0R65e9bcd98ff784492';
            console.log(url);
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
        // Add more columns as needed
    ];


    const dataSource = plantsData.map(plant => ({
        key: plant.id,
        id: plant.id,
        common_name: plant.common_name,
        scientific_name: plant.scientific_name,
        // Map other properties as needed
    }));

    function addPlant() {
        setPlants(prevPlants => [...prevPlants, { id: Math.random() }]);
    }

    function clearPlants() {
        setPlants([]);
    }

    return (
        <div>
            <Button onClick={addPlant}>Add Plant</Button>
            <Button onClick={clearPlants}>Clear Plants</Button>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
};

export default Plants;
