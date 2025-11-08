import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import PlantDetailsCard from '../Components/PlantdetailsCard/PlantDetailsCard';
import Footer from '../Components/Footer/Footer';

const DetailPlants = () => {
    const data=useLoaderData()
    const {id} = useParams()
    const [plants,setPlants]=useState({});
    //console.log(data,id)

    useEffect(()=>{
        const plantDetails=data.find(singlePlant => singlePlant.plantId==id)
        setPlants(plantDetails)
    },[data,id])
    return (
        <div className='bg-[#f6f8f6]'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto space-y-5 m-7 '>
                    <PlantDetailsCard plants={plants}></PlantDetailsCard>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DetailPlants;