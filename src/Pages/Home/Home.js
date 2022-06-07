import React from 'react';
import Footer from '../Shared/Footer';
import Article from './Article';
import Banner from './Banner';
import PopularNow from './PopularNow';
import Shop from './Shop';
import Trending from './Trending';

const Home = () => {
    return (
       <>
        <main>
            <Banner></Banner>
            <PopularNow></PopularNow>
            <Trending></Trending>
            <Shop></Shop>
            <Article></Article>
            <Footer></Footer>
        </main>
       </>
    );
};

export default Home;