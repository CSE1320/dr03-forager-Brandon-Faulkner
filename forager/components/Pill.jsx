export default function Pill({ text, active, onToggle }) {
    return (
        <button
            onClick={() => onToggle(text)}
            className={`px-4 rounded-2xl text-center text-base font-medium transition-colors duration-200 whitespace-nowrap max-w-full 
                ${active ? "bg-main-green text-white" : "bg-bg-gray text-fg-gray"}`} >
            <p>{text}</p>
        </button>
    )
}