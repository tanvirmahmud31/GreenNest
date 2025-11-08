import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {

    const {plantId}=plant;

    return (
        <div className="card bg-base-100 w-96 shadow-sm items-center">
            <figure className="px-3 pt-3">
                <img
                    src={plant.image}
                    alt={plant.plantName}
                    className="rounded-xl w-full h-[350px] object-cover"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{plant.plantName}</h2>
                <p className="text-lg font-semibold">${plant.price}</p>
                <p className="text-yellow-500">⭐ {plant.rating}</p>
                <div className="card-actions w-full">
                    <Link to={`/detailPlant/${plantId}`}><button className="btn bg-[#3d5537] text-white w-full">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;
