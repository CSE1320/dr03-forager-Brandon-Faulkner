import MushroomCard from "./MushroomCard";

export default function MushroomList({ mushrooms, onSelectMushroom }) {
    return (
        <ul className='flex flex-wrap justify-start gap-x-1 gap-y-4 px-2 mt-4'>
            {mushrooms.map((mushroom, index) => (
                <li key={index} className='list-none'>
                    <MushroomCard  
                        mushroom={mushroom} 
                        onSelect={onSelectMushroom}
                    />
                </li>
            ))}
        </ul>
    );
}