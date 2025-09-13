import React from "react";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0d3b66] to-[#1a5f7a] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/src/assets/sea1.jpg')" }}
      ></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] via-[#00FFD6] to-[#9B59B6] drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
          About This Project
        </h2>

        <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
          Global Ocean Plastic Tracker is designed to help visualize and understand
          the accumulation of plastic waste in oceans worldwide. Using real-time
          air and water current data, our platform highlights hotspots and tracks
          the flow of pollution globally. This project aims to raise awareness
          about ocean pollution and provide actionable insights for research
          and environmental action.
        </p>


        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://github.com/kd4dev/plasticTrack/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0D7377] to-[#14FFEC] hover:from-[#14FFEC] hover:to-[#0D7377] text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
          <a
           href="/Map"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0D7377] to-[#14FFEC] hover:from-[#14FFEC] hover:to-[#0D7377] text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View Map
          </a>
        </div>
      </div>
    </div>
  );
}
