import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Assets/Images/404.png';

const NotFound = () => {
    return (
        <section className='min-h-screen grid place-content-center'>
            <div className='h-full text-center' >
                <img className='w-full max-w-4xl mx-auto' src={notFound} alt="" />
                <h3>The page you are looking for is not found</h3>
                <Link to='/'>
                <button className='btn bg-red-500 hover:bg-red-600 text-white mt-2'>Back To Home</button></Link>
            </div>
        </section>
    );
};

export default NotFound;