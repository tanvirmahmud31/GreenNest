import React from 'react';

const Tips = ({tip}) => {
   // console.log(tip)
    return (
        <div className='space-y-3 mt-5 '>
           <h2 className='font-bold text-xl text-center '>{tip.title}</h2>
           <p>{tip.tips}</p>
        </div>
    );
};

export default Tips;