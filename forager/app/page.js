'use client'
import DashboardPage from './dashboard/page';
import { useAppState } from '@/contexts/AppStateProvider';

export default function Home() {
  const state = useAppState();
  return <DashboardPage {...state} />;
}
