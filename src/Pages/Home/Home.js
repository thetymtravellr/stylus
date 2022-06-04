import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Offer from './Offer';
import PopularNow from './PopularNow';
import Reviews from './Reviews';
import Shop from './Shop';
import Trending from './Trending';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <PopularNow></PopularNow>
            <Trending></Trending>
            <Shop></Shop>
            <Reviews></Reviews>
            <Offer></Offer>
            <Footer></Footer>
        </main>
    );
};

export default Home;