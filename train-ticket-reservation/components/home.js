// src/components/Home.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?origin=${origin}&destination=${destination}&date=${date}`);
  };

  return (
    <div>
      <h1>Search for Trains</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;