'use client'
import { act, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../../components/NavBar';
import Message from '@/components/Message';
import { messages } from '@/data/development';
import ComparisonTable from '@/components/ComparisonTable';
import { FaChevronLeft } from 'react-icons/fa';
import { useAppState } from '@/contexts/AppStateProvider';

export default function MushroomComparisonPage() {
  const router = useRouter();
  const { mushrooms, activeMushroom } = useAppState();

  return (
    <div className="bg-main-white min-h-screen w-full flex flex-col">

      <div className="sticky top-0 z-10 flex items-center justify-center bg-main-green h-24 w-full rounded-b-3xl">
        <div className='flex w-full h-full justify-center items-end pb-2 relative'>
          <button className="absolute left-2 mb-1 text-white">
            <FaChevronLeft className="h-7 w-7" onClick={() => router.push("/mushroom")} />
          </button>
          <h1 className="text-white font-semibold text-3xl">Compare</h1>
        </div>
      </div>

      <Message message={messages.warningMessage} />

      
      <div className="w-full mx-auto px-4 pt-4 pb-20">
      <ComparisonTable mushroom={activeMushroom}/>
        
      </div>
      
      <NavBar />
    </div>
  );
}
