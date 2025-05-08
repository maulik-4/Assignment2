// components/Dashboard.jsx
import React, { useState } from "react";
import UpcomingTripCard from "./UpcomingTripCard";
import FlightDetailsCard from "./FlightDetailsCard";
import AccommodationSection from "./AccommodationSection";
import ActivitiesSection from "./ActivitiesSection";
import { FaSun, FaMoon } from "react-icons/fa";

const Dashboard = ({ tripInfo }) => {
  const [darkMode, setDarkMode] = useState(true);
  const {destination , duration, travelType} = tripInfo;
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "bg-[#19171A] text-white" : "bg-gray-50 text-black"} min-h-screen p-4 space-y-6 transition-all duration-300`}>
      
      {/* Theme Toggle Button */}
      <div className="flex justify-end">
        <button onClick={toggleDarkMode} className="text-2xl mb-4">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
      </div>

      {/* Dashboard Content */}
      <h2 className="text-xl font-bold">Hello {tripInfo.name || "Traveler"}!</h2>

      {/* Pass darkMode to all children */}
      <UpcomingTripCard tripInfo= {tripInfo} darkMode={darkMode} />
      <FlightDetailsCard darkMode={darkMode}   />
      <AccommodationSection darkMode={darkMode} />
      <ActivitiesSection darkMode={darkMode} />
    </div>
  );
};

export default Dashboard;
