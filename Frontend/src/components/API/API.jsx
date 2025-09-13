import React, { useState, useEffect } from "react";

export default function APIInfo() {
  const [apiData, setApiData] = useState([
    { name: "Wind Currents API", endpoint: "https://api.example.com/wind", description: "Provides real-time wind speed and direction." },
    { name: "Sea Currents API", endpoint: "https://api.example.com/sea", description: "Provides water current speed and direction." },
    { name: "Plastic Density API", endpoint: "https://api.example.com/plastic", description: "Provides plastic concentration data for regions." },
  ]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0d3b66] to-[#1a5f7a] text-white flex flex-col items-center px-6 py-20 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/src/assets/sea1.jpg')" }}
      ></div>

      <div className="relative z-10 max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] via-[#00FFD6] to-[#9B59B6] drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
          API Information
        </h2>

        <div className="space-y-6 text-gray-200 text-lg md:text-xl">
          {apiData.map((api, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-[#0D7377] to-[#14FFEC] bg-opacity-20 shadow-md hover:bg-opacity-40 transition-all"
            >
              <p className="font-semibold">{api.name}</p>
              <p className="italic">{api.endpoint}</p>
              <p>{api.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
