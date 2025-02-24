import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import SearchBar from '@/components/SearchBar';
import MushroomList from '@/components/MushroomList';
import { FaFilter } from 'react-icons/fa';
import { mushrooms } from '@/data/development';

export default function DashboardPage() {
  return (
    <div className="page flex flex-col">
      <div className="flex h-full">
        <div className="flex flex-col w-full bg-dark-green">
          <div className="flex flex-row w-full py-4 px-3">
            <h1 className="flex-grow flex flex-col justify-center items-start">
              Hi,<br></br><span className="font-bold text-4xl">Chantelle!</span>
            </h1>
            <div className="flex justify-center items-end relative bottom-4">
              <div className="h-10 w-10 p-2 text-center rounded-full bg-[#5f464b] shadow-md cursor-pointer">C</div>
            </div>
          </div>
          <div className="flex-grow w-full bg-main-white rounded-top-lr flex flex-col">
            <div className='flex w-full h-12 flex-row mt-6 px-4'>
              <div className='w-4/5 h-full'><SearchBar /></div>
              <div className='w-1/5 h-full flex justify-center items-center text-main-green cursor-pointer'><FaFilter /></div>
            </div>
            <div className='flex flex-col px-4 text-main-blue mt-6 flex-grow'>
              <h2 className='font-bold text-xl'>My Collection</h2>
              <div className='mt-2'>Active Filters</div>
              <div className='mt-2 flex-grow overflow-y-auto max-h-[calc(100vh-350px)]'>
                <MushroomList mushrooms={mushrooms} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
