import React from 'react';
import { warningMessage } from '../data/development';

const Message = () => {
    return (
        <div className="bg-main-red rounded-2xl flex flex-col w-max h-auto p-5 mx-auto shadow-lg shadow-black/50">
            <span className="flex justify-start items-center h-8 ml-2">
                <img width="27px" height="27px" className="" src={warningMessage.icon}></img>
                <h1 className="text-white text-lg font-semibold">{warningMessage.header}</h1>
            </span>
            <p className="text-white font-bold text-sm p-2 text-center">{warningMessage.message}</p>
        </div>
    );
};

export default Message;