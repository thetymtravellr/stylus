import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import News from './News';
import Offer from './Offer';
import PopularNow from './PopularNow';
import Reviews from './Reviews';
import Trending from './Trending';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <PopularNow></PopularNow>
            <Trending></Trending>
            <News></News>
            <Reviews></Reviews>
            <Offer></Offer>
            <Footer></Footer>
        </main>
    );
};

export default Home;