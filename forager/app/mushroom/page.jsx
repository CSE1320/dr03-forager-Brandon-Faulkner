'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../../components/NavBar';
import Message from '@/components/Message';
import { messages } from '@/data/development';
import Mushroom from '@/components/Mushroom';
import MushroomList from '@/components/MushroomList';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useAppState } from '@/contexts/AppStateProvider';

export default function MushroomPage() {
  const router = useRouter();
  const { mushrooms, activeMushroom, toggleFavorite } = useAppState();
  const [isMessageOpen, setIsMessageOpen] = useState(true);

  const similarMatches = mushrooms.filter(mushroom =>
    activeMushroom.similar_matches.some(match => match.name === mushroom.name));

  return (
    <div className="bg-main-white min-h-screen w-full flex flex-col">

      <div className="sticky top-0 z-10 flex items-center justify-center bg-main-green h-24 w-full rounded-b-3xl">
        <div className='flex w-full h-full justify-center items-end pb-2 relative'>
          <button className="absolute left-2 mb-1 text-white">
            <FaChevronLeft className="h-7 w-7" onClick={() => router.push("/dashboard")} />
          </button>
          <h1 className="text-white font-semibold text-3xl">Match Results</h1>
        </div>
      </div>

      <div className='flex pl-5 pr-5 pt-5'>
        <p className="text-sm text-black py-2 w-full">Not what you expected?</p>
        <div className='w-full flex justify-end'>
          <div className="w-max flex justify-center items-center py-2 bg-main-red rounded-lg p-2 gap-2 cursor-pointer">
            <p className="text-sm text-white">Report Error</p>
            <FaChevronRight />
          </div>
        </div>
      </div>

      <Message message={messages.warningMessage} />

      <div className="w-full mx-auto px-4 pt-4 pb-20">
        <div className="flex justify-end items-center gap-2 my-2 text-black cursor-pointer">
          <button className="text-sm" onClick={() => router.push("/comparison")}>Compare</button>
          <FaChevronRight />
        </div>

        <Mushroom
          mushroom={activeMushroom}
          isCard={false}
          onSelect={toggleFavorite} />

        <MushroomList
          mushrooms={similarMatches}
          onSelectMushroom={null}
          heading={"Similar Matches"}
          matchedMushroom={activeMushroom} />
      </div>
      <Message
        message={messages.attentionMessage}
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)} />
      <NavBar />
    </div>
  );
}
