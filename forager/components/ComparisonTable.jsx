import { useState } from "react";
import { comparisonLabels } from "@/data/development";

export default function ComparisonTable({ mushroom }) {
    const [editableValues, setEditableValues] = useState({
        capShape: "Flat",
        capColor: "Brown",
        capTexture: "Smooth",
        gillsType: "Free",
        gillsColor: "White",
        stemShape: "Slender",
        stemColor: "White",
        stemRing: "Absent",
        habitat: "?",
      });
    
      const handleChange = (field, value) => {
        setEditableValues((prev) => ({ ...prev, [field]: value }));
      };
    return (
        <div>
            <div className='flex justify-between gap-4'>
                <div className="flex flex-col items-center w-2/4">
                    <div className="flex relative justify-center w-full h-64 pb-8 px-4 pt-9 bg-white shadow-lg">
                        <img src="/images/background.png" alt="Your photo" className="w-full h-52 object-cover" />
                    </div>
                    <h1 className='text-2xl text-main-blue py-2'>Your Photo</h1>
                </div>
                <div className="flex flex-col items-center w-2/4">
                    <div className="flex relative justify-center w-full h-64 pb-8 px-4 pt-9 bg-white shadow-lg">
                        <div className="absolute top-1 left-2 bg-main-red text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
                            <img src='/icons/icon_warning.svg' className='w-5 h-5' alt="Warning Icon"></img>
                            <span>97% Match</span>
                        </div>
                        <img src={mushroom.image} alt={mushroom.name} className="w-full h-52 object-cover" />
                    </div>
                    <h1 className='text-2xl text-main-blue py-2'>{mushroom.name}</h1>
                </div>
            </div>

            <table className="w-full mt-4 border-collapse table-fixed mb-4">
                <tbody className="text-main-blue text-center">
                    {Object.keys(editableValues).map((key, index) => (
                        <tr key={index}>
                            <td className="p-2 border-r border-main-blue w-1/3">
                                <input
                                    type="text"
                                    value={editableValues[key]}
                                    onChange={(e) => handleChange(key, e.target.value)}
                                    className="w-full border-b border-black bg-transparent focus:outline-none text-center"
                                />
                            </td>
                            <td className="p-2 w-1/3 border-r border-main-blue font-semibold">{comparisonLabels.labels[key]}</td>
                            <td className="p-2 w-1/3">{comparisonLabels.referenceValues[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}