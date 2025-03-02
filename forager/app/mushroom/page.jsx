import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { mushrooms as mushroomData } from '@/data/development';

export default function MushroomPage({activeMushroom = mushroomData[0]}) {
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
