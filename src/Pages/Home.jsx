import React, { useEffect, useState } from 'react';
import PlantCard from '../Components/PlantCard/PlantCard';

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('/plants.json')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(error => console.error("Error loading plants:", error));
  }, []);

  return (
    <div  className='mt-7'>
        <h1 className='text-center text-2xl font-bold'>Top Rated Indoor Plants</h1>
        <div className="w-11/12 mx-auto items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {
        plants.map(plant => 
          <PlantCard key={plant.plantId} plant={plant} />
        )
      }
    </div>
    </div>
  );
};

export default Home;
