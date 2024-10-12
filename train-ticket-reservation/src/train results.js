// TrainResults.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TrainResults = () => {
  const [trains, setTrains] = useState([]);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    // Fetch train data based on search parameters (you can replace it with real API)
    const mockTrains = [
      { id: 1, name: "Express A", departure: "10:00", arrival: "14:00", seats: 20 },
      { id: 2, name: "Express B", departure: "12:00", arrival: "16:00", seats: 15 },
    ];
    setTrains(mockTrains);
  }, []);

  return (
    <div>
      <h2>Available Trains</h2>
      {trains.map((train) => (
        <div key={train.id}>
          <p>{train.name}</p>
          <p>Departure: {train.departure}</p>
          <p>Arrival: {train.arrival}</p>
          <p>Seats Available: {train.seats}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default TrainResults;
