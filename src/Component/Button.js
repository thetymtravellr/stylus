import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='bg-primary text-white px-4 py-2 rounded font-medium font-poppins hover:bg-secondary duration-150'>
            {children ? children : 'Button'}
        </button>
    );
};

export default Button;