import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ item }) => {
    return (
        <div>
            <div>
                <img src={item.img} alt="" />
            </div>
            <div>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <Link to='/'>learn more</Link>
            </div>
        </div>
    );
};

export default ShopCard;