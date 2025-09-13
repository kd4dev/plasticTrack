// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-gray-400 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 OceanTracker. All rights reserved.</p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/kd4dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00FFFF] transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-[#7F00FF] transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-[#00FFFF] transition-colors duration-200"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
