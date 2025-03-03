'use client'
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className='bg-white flex items-center p-3 w-full rounded-3xl shadow-lg'>
            <div className='text-gray-500'><FaSearch /></div>
            <input type='search' placeholder='Search for a mushroom' onChange={handleSearch} value={searchInput} className='pl-2 w-full h-full outline-none text-black'></input>
        </div>
    );
}
