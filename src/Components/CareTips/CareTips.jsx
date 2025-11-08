import React, { useEffect, useState } from 'react';
import Tips from '../../Pages/Tips';

const CareTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch('/careTips.json')
            .then((res) => res.json())
            .then((data) => setTips(data))
            .catch((err) => console.error('Error fetching tips:', err));
    }, []);

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-center font-bold text-2xl mb-6'>
                Plant Care Tips
            </h2>

            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-6
            ">
                {tips.map((tip, index) => (
                    <Tips key={index} tip={tip} />
                ))}
            </div>
        </div>
    );
};

export default CareTips;
