import MushroomCard from "./MushroomCard";

export default function MushroomList({ mushrooms, activeMushroom, setActiveMushroom }) {
    return (
        <ul className='flex flex-wrap justify-start gap-x-[.35rem] gap-y-4 px-2 mt-4'>
            {mushrooms.map((item, index) => (
                <li key={index} className='list-none cursor-pointer'>
                    <MushroomCard
                        mushroom={item}
                        activeMushroom={activeMushroom}
                        setActiveMushroom={setActiveMushroom} />
                </li>
            ))}
        </ul>
    );
}
