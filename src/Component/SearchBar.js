import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

const SearchBar = () => {
    return (
        <div className='border-purple-600 bg-purple-600 w-full max-w-md border h-12 flex rounded-md'>
            <input type="text" placeholder="what are you looking for?" className="group input border-0 focus:outline-none focus:bg-purple-600 focus:text-white text-white input-ghost w-full h-full text-lg placeholder:text-gray-300" />
            <button className='h-full w-14 grid place-content-center bg-purple-600 hover:bg-purple-700 text-white  rounded-r-md '>
                <SearchIcon className='w-6 '/>
            </button>
        </div>
    );
};

export default SearchBar;