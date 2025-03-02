'use client'
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { useAppState } from '@/contexts/AppStateProvider';

export default function MushroomPage() {
  const { activeMushroom } = useAppState();

  return (
    <div className="page">
      <h1>{activeMushroom.name}</h1>
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>
      <NavBar />
    </div>
  );
}
