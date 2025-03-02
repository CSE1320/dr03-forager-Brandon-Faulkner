'use client'
export default function MushroomCard({ mushroom }) {
    return (
        <div className='w-28 h-40 min-w-32 flex flex-col items-center'>
            <div className='flex relative justify-center w-24 h-32 bg-white shadow-lg'>
                {mushroom.filterable.category.includes("Poisonous") && (
                    <img className='absolute top-2 left-2 w-5 shadow-lg' src='/icons/warning-icon.png'></img>
                )}
                <img className='w-[5.5rem] h-24 object-cover mt-1' src={mushroom.image}></img>
            </div>
            <h1 className='text-base'>{mushroom.name}</h1>
        </div>
    );
}