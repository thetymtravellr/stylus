import React from 'react';

const ArrivalCard = ({ item }) => {
    return (
        <div className='border w-64 h-96'>
            <div>
                <img className='w-64' src={item.img} alt="" />
            </div>
            <h1>{item.title}</h1>
        </div>
    );
};

export default ArrivalCard;