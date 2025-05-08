import React from "react";
import { FaRegClock } from "react-icons/fa6";

const UpcomingTripCard = ({ tripInfo, darkMode }) => {
  const { destination, duration, travelType } = tripInfo;

  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-lg shadow transition-all`}>
      <h3 className="text-lg font-bold mb-2">Your Upcoming Trip</h3>

      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-64 object-cover"
          alt="Trip Destination"
        />

        {/* Overlay Info */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent flex flex-col justify-between p-4 text-white">
          {/* Top Section */}
          <div>
            <h2 className="text-4xl font-bold  drop-shadow-[0_0_5px_#39FF14]">{destination}</h2>
          </div>

          {/* Bottom Info Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
            {/* Duration */}
            
           <div className="">
           <div className="flex items-center gap-2">
              <FaRegClock className="text-[#FFFF33] bg-[#212121] p-1 rounded-full w-8 h-8 shadow-md" />
              <span className="text-[#1BFFFF] flex flex-col font-medium">{duration}
              <span className="text-white font-medium">Duration</span> </span>
            </div>
          
           </div>

            {/* Travel Type */}
            <div className="flex items-center gap-2">
              <span className="text-[#FF6EC7] font-medium">Travel Type:</span>
              <span className="text-white">{travelType}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTripCard;
