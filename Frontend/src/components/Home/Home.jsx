import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0d3b66] to-[#1a5f7a] text-white flex flex-col justify-center items-center overflow-hidden">
      
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/src/assets/sea1.jpg')" }}
      ></div>

      <div className="relative z-10 text-center px-4">
        
        <h2 className="text-2xl font-bold text-white drop-shadow-md mb-4">
          OceanTracker
        </h2>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] via-[#38B2AC] to-[#319795] drop-shadow-[0_0_8px_rgba(79,209,197,0.6)]">
          Global Ocean Plastic Tracker
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-gray-200">
          Explore real-time plastic accumulation in oceans around the world using live air and water currents.
          Visualize hotspots and understand the flow of pollution globally.
        </p>

        <Link
          to="/map"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#0D7377] to-[#14FFEC] hover:from-[#14FFEC] hover:to-[#0D7377] text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          View Global Map
        </Link>
      </div>
    </div>
  );
}
