import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Mushroom({ mushroom, isCard, onSelect, matchedMushroom }) {
    const [isFavorite, setIsFavorite] = useState(mushroom.filterable.tags.includes("Favorites"));

    //Get the similarity score of the current mushroom from the matched mushroom
    let similarity, similarityColor;
    if (matchedMushroom) {
        const simularMushroom = matchedMushroom.similar_matches.find(
            (simularMatch) => simularMatch.name === mushroom.name
        );

        similarity = parseInt(simularMushroom.similarity, 10);
        if (similarity >= 90) {
            similarityColor = "bg-high-similar";
        } else if (similarity >=70 && similarity <=89) {
            similarityColor = "bg-med-similar";
        } else {
            similarityColor = "bg-low-similar";
        }
    }

    useEffect(() => {
        setIsFavorite(mushroom.filterable.tags.includes("Favorites"));
    }, [mushroom.filterable.tags]);

    return isCard ? (
        // Card View
        <div
            className='w-28 h-40 min-w-32 flex flex-col items-center cursor-pointer'
            onClick={onSelect ? () => onSelect(mushroom) : null}
        >
            <div className='flex relative justify-center w-24 h-32 bg-white shadow-lg'>
                {matchedMushroom && (
                    <span className={`absolute top-2 left-2 w-10 h-5 ${similarityColor} text-white rounded-md text-sm text-center`}>{similarity}%</span>
                )}
                {mushroom.filterable.category.includes("Poisonous") && (
                    <img className={`absolute top-2 ${matchedMushroom ? "left-14": "left-2"} w-5 shadow-lg`} src='/icons/warning-icon.png' alt="Warning Icon"></img>
                )}
                <img className='w-[5.5rem] h-24 object-cover mt-1' src={mushroom.image} alt={mushroom.name}></img>
            </div>
            <h1 className='text-base text-main-blue'>{mushroom.name}</h1>
        </div>
    ) : (
        // Full Display View
        <div>
            <div className="flex relative justify-center w-full h-80 pb-12 px-4 pt-9 bg-white shadow-lg">
                <div className="absolute top-1 left-2 bg-main-red text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
                    <img src='/icons/icon_warning.svg' className='w-5 h-5' alt="Warning Icon"></img>
                    <span>97% Match</span>
                </div>
                <img src={mushroom.image} alt={mushroom.name} className="w-full h-auto object-cover" />
            </div>

            <div className="flex items-center justify-between mt-4">
                <div>
                    <h2 className="text-xl font-bold text-main-blue">{mushroom.name}</h2>
                    <p className="text-sm italic text-main-blue">{mushroom.scientific_name}</p>
                </div>
                <button className="bg-main-green hover:bg-dark-green text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl"
                    onClick={() => {
                        onSelect(mushroom.name)
                        setIsFavorite(!isFavorite)
                    }}>
                    {isFavorite ? <FaMinus /> : <FaPlus />}
                </button>
            </div>

            <div className="bg-main-brown text-white rounded-3xl mt-4 p-4">
                <h3 className="text-base font-semibold">Fast Facts</h3>
                <p className="text-sm mt-1">Cap Diameter: {mushroom.characteristics.cap_diameter}</p>
                <p className="text-sm">Gill Color: {mushroom.characteristics.gill_color}</p>
                <p className="text-sm">Stem Color: {mushroom.characteristics.stem_color}</p>
                <p className="text-sm">Habitat: {mushroom.characteristics.habitat}</p>
            </div>

            <div className="mt-4 text-sm text-main-blue">
                <p>{mushroom.description}</p>
            </div>
        </div>
    );
}

