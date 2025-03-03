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

  const toggleFavorite = (name) => {
    setMushrooms((prevMushrooms) =>
      prevMushrooms.map((mushroom) =>
        mushroom.name === name
          ? {
            ...mushroom,
            filterable: {
              ...mushroom.filterable,
              tags: mushroom.filterable.tags.includes("Favorites")
                ? mushroom.filterable.tags.filter(tag => tag !== "Favorites")
                : [...mushroom.filterable.tags, "Favorites"]
            }
          }
          : mushroom
      )
    );
  };

  const value = {
    mushrooms,
    setMushrooms,
    activeMushroom,
    setActiveMushroom,
    activeFilters,
    toggleFilter,
    toggleFavorite
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);
