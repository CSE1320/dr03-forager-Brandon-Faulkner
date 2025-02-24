'use client'
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");

    const mushrooms = [
        { name: "Mushroom" }
    ]

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        mushrooms.filter((mushroom) => {
            return mushroom.name.match(searchInput);
        })
    }


    return (
        <div className='bg-white flex items-center p-3 w-full rounded-3xl'>
            <div className='text-gray-500'><FaSearch /></div>
            <input type='search' placeholder='Search for a mushroom' onChange={handleChange} value={searchInput} className='pl-2 w-full h-full outline-none text-black'></input>
        </div>
    );
}
