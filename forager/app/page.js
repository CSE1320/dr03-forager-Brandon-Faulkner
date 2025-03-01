'use client'
import { useState } from 'react';
import DashboardPage from './dashboard/page';
import { mushrooms as mushroomData } from '@/data/development';

export default function Home() {
  const [mushrooms, setMushrooms] = useState(mushroomData);
  const [activeMushroom, setActiveMushroom] = useState(null);

  return <DashboardPage
    currentMushrooms={mushrooms}
    setMushrooms={setMushrooms}
    activeMushroom={activeMushroom}
    setActiveMushroom={setActiveMushroom} />;
}
