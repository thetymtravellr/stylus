import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessReview from './BusinessReview';
import News from './News';
import Offer from './Offer';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessReview></BusinessReview>
            <News></News>
            <Reviews></Reviews>
            <Offer></Offer>
            <Footer></Footer>
        </main>
    );
};

export default Home;