import Pill from "./Pill";

export default function PillList({heading, pills}){
    return (
        <div className="pb-10">
            <h4 className="text-xl text-black font-bold pb-3">{heading}</h4>
            <div  className="flex flex-wrap gap-2">
                {pills.map((pillName, index)=> (
                    <Pill key={index} text={pillName}/>
                ))}
            </div>
            
        </div>
    )
}