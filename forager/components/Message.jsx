import React from 'react';
import { IoMdClose } from "react-icons/io";
import { messages } from '@/data/development';

const Message = ({ message, isOpen, onClose }) => {
    // Return null if the attention message is not open
    if (message === messages.attentionMessage && !isOpen) return null;

    const renderMessageContent = (
        <div className='p-5'>
            <div className='relative bg-main-red rounded-2xl flex flex-col w-full h-auto p-5 mx-auto shadow-lg'>
                {message.closable && (
                    <IoMdClose className='absolute right-2 top-4 text-3xl cursor-pointer' onClick={onClose} />
                )}
                <span className="flex justify-start items-center h-8 ml-2">
                    <img width="27px" height="27px" src={message.icon} />
                    <h1 className="text-white text-lg pl-2 font-semibold uppercase">{message.header}</h1>
                </span>
                <p className="text-white font-bold text-sm p-2">{message.message}</p>
            </div>
        </div>
    );

    // Conditionally render the overlay for attention message
    if (message === messages.attentionMessage) {
        return isOpen ? (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-12 pb-4'>
                {renderMessageContent}
            </div>
        ) : null;
    }

    return renderMessageContent;
};

export default Message;