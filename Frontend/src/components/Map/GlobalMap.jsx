import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";


  
export default function GlobalMap() {
  const [hotspots, setHotspots] = useState([
    { lat: 37.7749, lon: -122.4194, intensity: 80, wind: 5, water: 2 },
    { lat: 25.7617, lon: -80.1918, intensity: 50, wind: 3, water: 1 },
    { lat: 1.3521, lon: 103.8198, intensity: 30, wind: 2, water: 0.5 },
    { lat: -33.8688, lon: 151.2093, intensity: 70, wind: 4, water: 1.8 },
  ]);

  const fetchLatestData = async () => {
  // Example: yaha apna real API call aur model run karao
  console.log("Fetching latest data...");

  // Dummy update to simulate new hotspot data
  const updatedHotspots = hotspots.map(h => ({
    ...h,
    intensity: Math.min(100, h.intensity + Math.floor(Math.random() * 20 - 10))
  }));
  setHotspots(updatedHotspots);
};


  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0d3b66] to-[#1a5f7a] text-white flex flex-col pt-24 overflow-hidden">
      
      {/* Background Image */}
     <div
  className="absolute inset-0 w-full h-full bg-cover bg-center"
  style={{ backgroundImage: "url('/src/assets/sea1.jpg')" }}
></div>


      {/* Heading */}
      <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] via-[#00FFD6] to-[#9B59B6] drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
        Global Plastic Hotspots
      </h1>

      <p className="relative z-10 text-center text-gray-200 mb-4">
        Click on markers to see plastic intensity and currents data.
      </p>

      {/* CTA Button */}

      {/* Map Container */}
      <div className="relative z-10 flex justify-center">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={true}
          className="w-full md:w-4/5 h-[70vh] rounded-xl shadow-lg"
        >
          {/* Dark Map Tiles */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Hotspot Markers */}
          {hotspots.map((spot, index) => {
            const color =
              spot.intensity > 70
                ? "#00E5FF" // bright cyan
                : spot.intensity > 40
                ? "#00FFD6" // aqua
                : "#9B59B6"; // soft purple

            return (
              <CircleMarker
                key={index}
                center={[spot.lat, spot.lon]}
                radius={10 + spot.intensity / 10}
                color={color}
                fillOpacity={0.7}
                stroke={false}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                  <div className="text-black text-sm font-semibold">
                    <p>Plastic Intensity: {spot.intensity}</p>
                    <p>Wind Speed: {spot.wind} m/s</p>
                    <p>Water Current: {spot.water} m/s</p>
                  </div>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>
    <div className="flex justify-center mt-6 relative z-10">
  <button
    onClick={fetchLatestData}
    className="px-8 py-4 bg-gradient-to-r from-[#0D7377] to-[#14FFEC] hover:from-[#14FFEC] hover:to-[#0D7377] text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
  >
    Fetch Latest Data
  </button>
</div>
    </div>
  );
}


