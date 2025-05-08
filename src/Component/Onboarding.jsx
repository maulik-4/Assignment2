import React, { useState } from "react";
import { FaUser, FaCalendarAlt, FaUserFriends, FaUserAlt, FaUsers, FaUserTie, FaSun, FaMoon } from "react-icons/fa";

const Onboarding = ({ onContinue }) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelType, setTravelType] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleSelectTravelType = (type) => {
    setTravelType(type);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "bg-gradient-to-b from-black via-gray-900 to-gray-800" : "bg-white"} min-h-screen p-6 flex flex-col justify-between transition-colors duration-300`}>
      
      {/* Toggle Dark/Light Mode */}
      <div className="flex justify-end mb-4">
        <button onClick={toggleDarkMode} className="text-2xl">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className={`${darkMode ? "text-white" : "text-black"}`}>
          <h1 className="text-2xl font-bold mb-1">Plan Your Journey, Your Way!</h1>
          <p className="text-sm text-gray-400">Let's create your personalised travel experience</p>
        </div>

        {/* Destination Input */}
        <div>
          <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Where would you like to go?</label>
          <div className={`flex items-center rounded px-3 py-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
            <FaUser className={`mr-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter Destination"
              className={`bg-transparent flex-1 outline-none ${darkMode ? "text-white" : "text-black"}`}
            />
          </div>
        </div>

        {/* Duration Input */}
        <div>
          <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-600"}`}>How long will you stay?</label>
          <div className={`flex items-center rounded px-3 py-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
            <FaCalendarAlt className={`mr-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className={` flex-1 outline-none appearance-none ${darkMode ? "text-white bg-gray-700" : "text-black "}`}
            >
              <option value="">Select Duration</option>
              <option value="1-3 days">1-3 days</option>
              <option value="4-7 days">4-7 days</option>
              <option value="8+ days">8+ days</option>
            </select>
          </div>
        </div>

        {/* Travel Type */}
        <div>
          <label className={`text-sm mb-1 block ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Who are you traveling with?</label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {[
              { type: "solo", label: "Solo", icon: <FaUserAlt /> },
              { type: "couple", label: "Couple", icon: <FaUserFriends /> },
              { type: "family", label: "Family", icon: <FaUsers /> },
              { type: "friends", label: "Friends", icon: <FaUserTie /> },
            ].map(({ type, label, icon }) => (
              <button
                key={type}
                onClick={() => handleSelectTravelType(type)}
                className={`flex items-center justify-center gap-2 p-3 rounded-md border ${
                  travelType === type
                    ? "bg-blue-600 text-white"
                    : darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-8">
        <button
          onClick={() => onContinue({ destination, duration, travelType })}
          disabled={!destination || !duration || !travelType}
          className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
