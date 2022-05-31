import React from 'react';

const Offer = () => {
    return (
        <section className='h-[50vh] offerBg max-w-7xl mx-auto my-12 bg-black bg-opacity-30 grid place-content-center'>
            <div className='text-white text-center md:text-left w-full md:w-2/4 p-4'>
                <h1 className='text-xl sm:text-4xl mb-4 text-yellow-500 font-bold'>Get Ready For The Biggest Event By <span className='text-white gilroyBold text-xl sm:text-5xl'>Toolers</span></h1>
                <p className='mb-2 text-sm'>
                    YaY! Its Been 15 years Since We Are Giving You The Best Tools You Have Ever Sold. So Now We Are Giving Some Special Offers To Our Beloved Customer.
                </p>
                <p className='text-xl'>
                    Get <span className='text-2xl font-fredokaOne text-yellow-300'>35%</span> Off On Every Product From June 15th To 20th. 
                </p>
            </div>

        </section>
    );
};

export default Offer;