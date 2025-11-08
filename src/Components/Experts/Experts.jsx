import React from 'react';

import woman from '../../assets/woman.png';
import man1 from '../../assets/m1.png';
import man2 from '../../assets/m2.png';

const Experts = () => {
    return (
        <div className='mt-10'>
            <h1 className='font-bold text-3xl text-center mb-10'>
                Meet Our Green Experts
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 place-items-center'>
                
                {/* Expert 1 */}
                <div className='text-center bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition'>
                    <img className='w-40 mx-auto mb-3' src={woman} alt="" />
                    <h2 className='font-semibold text-lg'>Dr. Alena Cartet</h2>
                    <p className='text-green-700 font-medium mb-1'>Botanist & Author</p>
                    <p className='text-gray-600 text-sm'>
                        With over 20 years of experience, Alena in tropical plant biology and
                        sustainable indoor gardening.
                    </p>
                </div>

                {/* Expert 2 */}
                <div className='text-center bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition'>
                    <img className='w-40 mx-auto mb-3' src={man1} alt="" />
                    <h2 className='font-semibold text-lg'>Marcus Thorne</h2>
                    <p className='text-green-700 font-medium mb-1'>Orchid Specialist</p>
                    <p className='text-gray-600 text-sm'>
                        Marcus is our go-to expert for orchids, helping enthusiasts cultivate 
                        these beautiful exotic flowers.
                    </p>
                </div>

                {/* Expert 3 */}
                <div className='text-center bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition'>
                    <img className='w-40 mx-auto mb-3' src={man2} alt="" />
                    <h2 className='font-semibold text-lg'>Kenji Tanaka</h2>
                    <p className='text-green-700 font-medium mb-1'>Bonsai Master</p>
                    <p className='text-gray-600 text-sm'>
                        A third-generation Bonsai artist, Kenji shares the ancient art of 
                        miniature trees with a modern style.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Experts;
