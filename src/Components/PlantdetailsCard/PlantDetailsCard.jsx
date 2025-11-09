import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const PlantDetailsCard = ({ plants }) => {

    const handleBook = (e) => {
        e.preventDefault(); 
        toast.success("✅ Booked Successful!");

        e.target.reset(); 
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 rounded-2xl bg-base-100 shadow-sm">

          
            <div>
                <img
                    src={plants.image}
                    alt={plants.plantName}
                    className="w-full h-[550px] object-cover rounded-xl"
                />

                <div className="flex gap-3 mt-4">
                    {Array(4).fill(plants.image).map((img,i)=>(
                        <img key={i} src={img} className="w-20 h-20 rounded-xl object-cover cursor-pointer" />
                    ))}
                </div>
            </div>

            
            <div className="space-y-4 h-full">
                <h1 className="text-4xl font-bold">{plants.plantName}</h1>
                <p className="text-gray-600 leading-relaxed">{plants.description}</p>

                <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-lg">
                    <p><span className="font-semibold">Care Level:</span> {plants.careLevel}</p>
                    <p><span className="font-semibold">Stock:</span> {plants.availableStock} in Stock</p>
                    <p><span className="font-semibold">Rating:</span> ⭐ {plants.rating}</p>
                    <p><span className="font-semibold">Price:</span>
                        <span className="text-2xl font-bold text-green-700 ml-1">${plants.price}</span>
                    </p>
                </div>

                
                <form onSubmit={handleBook} className="mt-6 p-5 rounded-xl bg-gray-50">
                    <h3 className="font-semibold text-lg mb-3">Need Expert Advice?</h3>

                    <input type="text" placeholder="Your Name"
                        className="input input-bordered w-full mb-3"
                        required
                    />

                    <input type="email" placeholder="Your Email"
                        className="input input-bordered w-full mb-3"
                        required
                    />

                    <button type="submit" className="btn bg-[#4a6b5d] text-white normal-case w-full">
                        Book Now
                    </button>
                </form>
            </div>

            <ToastContainer />
        </div>
    );
};

export default PlantDetailsCard;
