// App.jsx
import React, { useState } from "react";
import Onboarding from "./Component/Onboarding";
import Dashboard from "./Component/Dashboard";

function App() {
  const [tripInfo, setTripInfo] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {tripInfo ? (
        <Dashboard tripInfo={tripInfo} />
      ) : (
        <Onboarding onContinue={setTripInfo} />
      )}
    </div>
  );
}

export default App;
