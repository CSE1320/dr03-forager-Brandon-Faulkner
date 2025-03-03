import MushroomList from "./MushroomList";

export default function SimilarMatchList({ mushrooms, onSelectMushroom, heading = null, matchedMushroom = null }) {

    return (
        <MushroomList
            mushrooms={mushrooms}
            onSelectMushroom={onSelectMushroom}
            heading={heading}
            matchedMushroom={matchedMushroom} 
        />
    );
}