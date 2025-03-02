'use client'
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Message from '@/components/Message';
import { FaArrowLeft, FaExclamation } from 'react-icons/fa';
import { useAppState } from '@/contexts/AppStateProvider';

export default function MushroomPage() {
  const { activeMushroom } = useAppState();

  return (
    <div className="bg-white min-h-screen w-full flex flex-col">

      <div className="fixed flex items-center justify-center bg-main-green h-24 w-full rounded-b-3xl">
        <button className="absolute left-3 flex items-center text-white">
          <FaArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-white font-semibold text-base">Match Results</h1>
      </div>

      {/* "Not what you expected?" */}
      <div className="flex justify-center items-center bg-[#F8F8F8] py-2">
        <p className="text-sm text-gray-500">Not what you expected?</p>
      </div>

      <Message />

      {/* Main Content Container */}
      <div className="max-w-sm w-full mx-auto px-4 pt-4 pb-20">
        {/* Match Percentage & Image */}
        <div className="relative">
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
            <span>97% Match</span>
            <FaExclamation className="h-4 w-4 text-white" />
          </div>
          <img
            src="/images/death-cap.jpg"
            alt="Death Cap"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Compare Link */}
        <div className="flex justify-end mt-2">
          <button className="text-sm text-gray-600 underline">Compare</button>
        </div>

        {/* Mushroom Title & Scientific Name */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Death Cap</h2>
            <p className="text-sm italic text-gray-500">Amanita phalloides</p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl">
            +
          </button>
        </div>

        {/* Fast Facts Card */}
        <div className="bg-[#8B4F45] text-white rounded-md mt-4 p-4">
          <h3 className="text-base font-semibold">Fast Facts</h3>
          <p className="text-sm mt-1">Cap Diameter: 5-15cm</p>
          <p className="text-sm">Gill Color: White</p>
        </div>

        {/* Description */}
        <div className="mt-4 text-sm text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>

        {/* Similar Matches Section */}
        <h3 className="mt-6 mb-2 font-semibold text-lg text-gray-800">
          Similar Matches
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {/* 1. Paddy Straw */}
          <div className="relative">
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              90%
            </div>
            <img
              src="/images/paddy-straw.jpg"
              alt="Paddy Straw"
              className="w-full h-auto rounded"
            />
            <p className="text-sm font-medium mt-1">Paddy Straw</p>
          </div>

          {/* 2. Destroying Angel */}
          <div className="relative">
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
              <span>80%</span>
              <FaExclamation className="h-4 w-4" />
            </div>
            <img
              src="/images/destroying-angel.jpg"
              alt="Destroying Angel"
              className="w-full h-auto rounded"
            />
            <p className="text-sm font-medium mt-1">Destroying Angel</p>
          </div>

          {/* 3. False Death Cap */}
          <div className="relative">
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
              <span>70%</span>
              <FaExclamation className="h-4 w-4" />
            </div>
            <img
              src="/images/false-death-cap.jpg"
              alt="False Death Cap"
              className="w-full h-auto rounded"
            />
            <p className="text-sm font-medium mt-1">False Death Cap</p>
          </div>

          {/* 4. Puffball */}
          <div className="relative">
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              60%
            </div>
            <img
              src="/images/puffball.jpg"
              alt="Puffball"
              className="w-full h-auto rounded"
            />
            <p className="text-sm font-medium mt-1">Puffball</p>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
