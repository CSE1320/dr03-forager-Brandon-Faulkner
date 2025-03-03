import Mushroom from "./Mushroom";

export default function MushroomCard({ mushroom, onSelect, matchedMushroom }) {
    return (
        <Mushroom
            mushroom={mushroom}
            isCard={true}
            onSelect={onSelect}
            matchedMushroom={matchedMushroom}
        />
    );
}