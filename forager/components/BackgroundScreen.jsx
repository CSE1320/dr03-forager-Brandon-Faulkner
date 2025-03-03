'use client'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaBolt, FaImage } from "react-icons/fa";
import { IoCameraReverse } from "react-icons/io5";

export default function BackgroundScreen() {
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [facingMode, setFacingMode] = useState('environment');

    useEffect(() => {
        startCamera();
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [facingMode]);

    const startCamera = async () => {
        try {
            const newStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: facingMode },
                audio: false
            });
            setStream(newStream);
            if (videoRef.current) {
                videoRef.current.srcObject = newStream;
            }
        } catch (err) {
            console.error("Error accessing camera:", err);
        }
    };

    const toggleCamera = () => {
        setFacingMode(prev => prev === 'environment' ? 'user' : 'environment');
    };

    return (
        <div className="relative w-full h-screen">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                className="absolute h-full w-full inset-0 object-cover"
            />

            <div className="fixed z-50 top-0 left-0 right-0 h-24 bg-black bg-opacity-50 flex justify-between items-center px-4 pt-4">
                <Link href={"/dashboard"} className="cursor-pointer" passHref>
                    <FaChevronLeft className="h-8 w-8" />
                </Link>
                <FaBolt className="h-8 w-8" />
            </div>

            <div className="fixed inset-0 flex justify-center items-center">
                <div className="border-2 border-white w-64 h-64" />
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-around items-center">
                <FaImage className="h-8 w-8" />
                <Link href={"/mushroom"} className="w-16 h-16 bg-gray-500 rounded-full border-4 border-white" />
                <button onClick={toggleCamera}>
                    <IoCameraReverse className="h-8 w-8" />
                </button>
            </div>
        </div>
    );
};
