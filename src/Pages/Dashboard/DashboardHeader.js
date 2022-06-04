import React from 'react';
import SearchBar from '../../Component/SearchBar';
import Time from '../../Component/Time';

const Header = () => {
    return (
        <header className='w-full h-20 flex justify-around items-center space-x-8 pl-28 pr-8 bg-primary sticky top-0 z-40'>
            <h1 className='w-fit text-3xl font-semibold  text-white'>Dashboard</h1>
            <div className='w-full flex items-center justify-end space-x-14'>
            <SearchBar></SearchBar>
            <Time></Time>
            {/* <Disclosure></Disclosure> */}
            </div>
        </header>
    );
};

export default Header;