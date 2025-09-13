// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-[#111111] shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#7F00FF]">
          OceanTracker
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-semibold"
                  : "text-gray-300 hover:text-[#7F00FF] transition-colors duration-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-semibold"
                  : "text-gray-300 hover:text-[#7F00FF] transition-colors duration-200"
              }
            >
              Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plasticList"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-semibold"
                  : "text-gray-300 hover:text-[#7F00FF] transition-colors duration-200"
              }
            >
              PlasticList
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-semibold"
                  : "text-gray-300 hover:text-[#7F00FF] transition-colors duration-200"
              }
            >
              About
            </NavLink>
          </li>
            <li>
            <NavLink
              to="/api"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-semibold"
                  : "text-gray-300 hover:text-[#7F00FF] transition-colors duration-200"
              }
            >
              API
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
