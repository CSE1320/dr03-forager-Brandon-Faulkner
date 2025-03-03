import BackgroundScreen from '@/components/BackgroundScreen';

export const metadata = {
  title: 'Camera View',
  description: 'Take a photo of a mushroom',
};

export default function PhotoSearchPage() {
  return (
    <div className="page">
      <BackgroundScreen />
    </div>
  );
}
