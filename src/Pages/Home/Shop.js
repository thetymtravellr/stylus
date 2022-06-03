import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsCard from '../../Component/NewsCard';

const Shop = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        axios.get('https://blooming-sierra-55430.herokuapp.com/news')
        .then(data => setNews(data.data))
    })
    
    return (
        <section className='min-h-screen my-12'>
            <h1 className='text-4xl font-light text-center mb-8'>From The <span className='font-bold text-indigo-500'>Blog</span></h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
               {
                  news?.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
               }
            </div>
        </section>
    );
};

export default Shop;