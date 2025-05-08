import React from "react";

const FlightDetailsCard = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-lg shadow transition-all`}>
      <h3 className="text-lg font-bold mb-2">Flight Details</h3>
      <p className="text-sm">DEL ✈️ NRT</p>
      <p className="text-sm">Departure: 10:00 AM</p>
      <p className="text-sm">Arrival: 8:00 PM</p>
    </div>
  );
};

export default FlightDetailsCard;
