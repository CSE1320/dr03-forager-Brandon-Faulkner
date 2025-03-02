'use client'
import { createContext, useContext, useState } from 'react';
import { mushrooms as mushroomData } from '@/data/development';

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
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

  const value = {
    mushrooms,
    setMushrooms,
    activeMushroom,
    setActiveMushroom,
    activeFilters,
    toggleFilter
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);
