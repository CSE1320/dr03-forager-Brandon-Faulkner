'use client'
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../../components/NavBar';
import Search from '@/components/Search';
import MushroomList from '@/components/MushroomList';
import FilterSettings from '@/components/FilterSettings';
import Pill from '@/components/Pill';
import { FaFilter } from 'react-icons/fa';

export default function DashboardPage({
  currentMushrooms = [], 
  setMushrooms, 
  activeMushroom, 
  setActiveMushroom,
  activeFilters = [],
  toggleFilter
}) {
  const router = useRouter();
  const [filteredMushrooms, setFilteredMushrooms] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const applyFilters = useCallback((mushrooms, query) => {
    // First filter favorites
    let result = mushrooms.filter((mushroom) => mushroom.filterable.is_favorite);
    
    // Apply search if exists
    if (query) {
      result = result.filter((mushroom) =>
        mushroom.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Then apply active filters
    if (activeFilters.length > 0) {
      result = result.filter(mushroom => 
        activeFilters.every(filter => {
          return (
            (mushroom.filterable.tags && mushroom.filterable.tags.includes(filter)) ||
            (mushroom.filterable.regions && mushroom.filterable.regions.includes(filter)) ||
            (mushroom.filterable.category && mushroom.filterable.category.includes(filter))
          );
        })
      );
    }
    return result;
  }, [activeFilters]);

  useEffect(() => {
    const filtered = applyFilters(currentMushrooms, searchQuery);
    setFilteredMushrooms(filtered);
  }, [currentMushrooms, activeFilters, searchQuery, applyFilters]);

  const handleMushroomSelect = (mushroom) => {
    setActiveMushroom(mushroom);
    router.push('/mushroom');
  }
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="page flex flex-col">
      <div className="flex h-full">
        <div className="flex flex-col w-full bg-dark-green">
          <div className="flex flex-row w-full py-12 px-6">
            <h1 className="flex-grow flex flex-col justify-center items-start">
              Hi,<br></br><span className="font-bold text-4xl">Chantelle!</span>
            </h1>
            <div className="flex justify-center items-end relative bottom-4">
              <div className="h-10 w-10 p-2 text-center rounded-full bg-[#5f464b] shadow-md cursor-pointer">C</div>
            </div>
          </div>
          <div className="flex-grow w-full bg-main-white rounded-top-lr flex flex-col">
            <div className='flex w-full h-12 flex-row mt-6 px-4'>
              <div className='w-4/5 h-full'><Search onSearch={handleSearch} /></div>
              <div className='w-1/5 h-full flex justify-center items-center text-main-green cursor-pointer'
                onClick={() => setIsFilterOpen(!isFilterOpen)}><FaFilter /></div>
            </div>
            <div className='flex flex-col text-main-blue mt-6 flex-grow'>
              <h2 className='font-bold text-xl px-6'>My Collection</h2>
              <div className='mt-2 px-6'>
                <div className="flex flex-wrap gap-2">
                  {activeFilters.map((filter, index) => (
                    <Pill 
                      key={index} 
                      text={filter} 
                      active={true}
                      onToggle={toggleFilter} />
                  ))}
                </div>
              </div>
              <div className='mt-2 flex-grow overflow-y-auto pb-12'>
                <MushroomList 
                  mushrooms={filteredMushrooms} 
                  onSelectMushroom={handleMushroomSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FilterSettings 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter} />
      <NavBar />
    </div>
  );
}
