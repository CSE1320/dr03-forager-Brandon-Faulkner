'use client'
import React, { useState } from 'react';

export default function MushroomList({ mushrooms }) {
    return (
        <ul className='flex flex-wrap justify-start gap-x-3 gap-y-4 p-0 mt-4'>
            {mushrooms.map((item, index) => (
                <li key={index} className='list-none cursor-pointer'>
                    <div className='w-28 h-40 flex flex-col items-center'>
                        <div className='flex relative justify-center w-24 h-32 bg-white shadow-md'>
                            {item.filterable.is_toxic && (
                                <img className='absolute top-3 left-2' src='../public/icons/icon_warning.svg'></img>
                                )}
                            <img className='w-24 h-24 object-cover mt-1' src={item.image}></img>
                        </div>
                        <h1 className='text-base'>{item.name}</h1>
                    </div>
                </li>
            ))}
        </ul>
    );
}
