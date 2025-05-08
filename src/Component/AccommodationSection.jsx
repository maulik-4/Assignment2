import React, { useState } from "react";

const hotels = [
  {
    name: "Hotel Tokyo Inn",
    description: "Affordable stay with free Wi-Fi",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Advance Tokyo Hotel",
    description: "Luxury rooms with city view",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Dates for the calendar
const dates = [
  { day: "Mon", date: 27 },
  { day: "Tue", date: 28 },
  { day: "Wed", date: 29 },
  { day: "Thu", date: 30 },
  { day: "Fri", date: 31 },
  { day: "Sat", date: 1 },
  { day: "Sun", date: 2 },
];

const AccommodationSection = ({ darkMode }) => {
  const [selectedDate, setSelectedDate] = useState(27);

  return (
    <div className="p-4">
      {/* Calendar Section */}
      <div className={`flex items-center gap-2 mb-6 overflow-x-auto ${darkMode ? "bg-gray-900" : "bg-gray-100"} p-2 rounded-lg`}>
        {dates.map((d) => (
          <div
            key={d.date}
            onClick={() => setSelectedDate(d.date)}
            className={`flex flex-col items-center justify-center cursor-pointer min-w-[50px] px-2 py-1 rounded-lg
              ${selectedDate === d.date ? "bg-green-500 text-white" : darkMode ? "text-white" : "text-black"}`}
          >
            <span className="text-xs">{d.day}</span>
            <span className="font-bold">{d.date}</span>
          </div>
        ))}
      </div>

      {/* Accommodation Section */}
      <h4 className="font-bold mb-2">Accommodation</h4>
      <div className="grid grid-cols-2 gap-4">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} rounded-lg overflow-hidden shadow transition-all`}
          >
            <img src={hotel.image} alt={hotel.name} className="h-24 w-full object-cover" />
            <div className="p-2">
              <h5 className="font-bold">{hotel.name}</h5>
              <p className="text-sm">{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationSection;
