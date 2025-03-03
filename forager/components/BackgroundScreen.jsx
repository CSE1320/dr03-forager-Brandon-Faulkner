'use client'
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaBolt, FaImage } from "react-icons/fa";
import { IoCameraReverse } from "react-icons/io5";

export default function BackgroundScreen() {
    const router = useRouter();

    return (
        <div className="relative w-full h-screen">
            <img src="/images/background.png" alt="Camera View" className="absolute h-full inset-0 object-cover" />

            <div className="fixed z-50 top-0 left-0 right-0 h-24 bg-black bg-opacity-50 flex justify-between items-center px-4 pt-4">
                <button className="cursor-pointer" onClick={() => router.push("/dashboard")}>
                    <FaChevronLeft className="h-8 w-8"/>
                </button>

                <FaBolt className="h-8 w-8" />
            </div>

            <div className="fixed inset-0 flex justify-center items-center">
                <div className="border-2 border-white w-64 h-64 cursor-pointer" onClick={() => router.push("/mushroom")}/>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-around items-center">
                <FaImage className="h-8 w-8" />
                <button className="w-16 h-16 bg-gray-500 rounded-full border-4 border-white" />
                <IoCameraReverse className="h-8 w-8" />
            </div>
        </div>
    );
};
