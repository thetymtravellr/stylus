import { TruckIcon } from '@heroicons/react/solid';
import React from 'react';

const NoticeBoard = () => {
    return (
        <div className='bg-black w-full text-center py-1'>
            <p className='text-xs text-white uppercase flex justify-center items-center'><TruckIcon className='w-5 mr-2'/> FREE STANDARD SHIPPING & RETURNS | TILL 26 DEC</p>
        </div>
    );
};

export default NoticeBoard;