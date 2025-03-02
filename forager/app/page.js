'use client'
import { useState } from 'react';
import DashboardPage from './dashboard/page';
import { mushrooms as mushroomData } from '@/data/development';

export default function Home() {
  const [mushrooms, setMushrooms] = useState(mushroomData);
  const [activeMushroom, setActiveMushroom] = useState(mushroomData[0]);
  const [activeFilters, setActiveFilters] = useState(["Favorites", "Poisonous"]);

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return <DashboardPage
    currentMushrooms={mushrooms}
    setMushrooms={setMushrooms}
    activeMushroom={activeMushroom}
    setActiveMushroom={setActiveMushroom}
    activeFilters={activeFilters}
    toggleFilter={toggleFilter} />;
}
