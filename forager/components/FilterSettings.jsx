import PillList from './PillList'
import { IoMdClose } from "react-icons/io";
import { filterData } from "../data/development.jsx"


export default function FilterSettings({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-12 pb-4'>
            <div className='flex flex-col p-4 bg-main-white rounded-2xl h-full m-6'>
                <div className='relative flex justify-center items-center w-full p-4'>
                    <h5 className="text-lg text-black font-bold absolute left-1/2 transform -translate-x-1/2">
                        FILTER
                    </h5>
                    <IoMdClose
                        onClick={onClose}
                        className="absolute right-0 text-2xl cursor-pointer text-black"
                    />
                </div>
                <div className="px-4">
                    {filterData.map((filter, index) => (
                        <PillList key={index} heading={filter.title} pills={filter.pills} />
                    ))}
                </div>
            </div>
        </div>
    )
}