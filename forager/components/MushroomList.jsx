import MushroomCard from "./MushroomCard";

export default function MushroomList({ mushrooms, onSelectMushroom, heading = null, matchedMushroom = null }) {
    const ulClass = `flex flex-wrap ${heading ? "justify-around mb-4" : "justify-start"} gap-x-1 gap-y-4 px-2 mt-4`;

    return (
        <div>
            {heading !== null &&
                <h3 className="mt-6 mb-2 font-semibold text-xl text-main-blue text-center">
                    {heading}
                </h3>
            }
            <ul className={ulClass}>
                {mushrooms.map((mushroom, index) => (
                    <li key={index} className='list-none'>
                        <MushroomCard
                            mushroom={mushroom}
                            onSelect={onSelectMushroom}
                            matchedMushroom={matchedMushroom}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}