import React, { useState } from "react";

export default function PlasticList() {
  const [hotspots, setHotspots] = useState([
    { region: "San Francisco Bay", intensity: 80 },
    { region: "Miami Coast", intensity: 50 },
    { region: "Singapore Strait", intensity: 30 },
    { region: "Sydney Harbor", intensity: 70 },
  ]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0d3b66] to-[#1a5f7a] text-white flex flex-col items-center px-6 py-20 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/src/assets/sea1.jpg')" }}
      ></div>

      <div className="relative z-10 max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] via-[#00FFD6] to-[#9B59B6] drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
          Plastic Hotspots List
        </h2>

        <ul className="space-y-4 text-gray-200 text-lg md:text-xl">
          {hotspots.map((spot, index) => (
            <li
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-[#0D7377] to-[#14FFEC] bg-opacity-20 shadow-md hover:bg-opacity-40 transition-all"
            >
              <span className="font-semibold">{spot.region}</span> — Intensity: {spot.intensity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
