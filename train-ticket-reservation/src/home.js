// Home.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [form, setForm] = useState({ origin: "", destination: "", date: "" });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?origin=${form.origin}&destination=${form.destination}&date=${form.date}`);
  };

  return (
    <div>
      <h1>Train Ticket Reservation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Origin"
          value={form.origin}
          onChange={(e) => setForm({ ...form, origin: e.target.value })}
        />
        <input
          type="text"
          placeholder="Destination"
          value={form.destination}
          onChange={(e) => setForm({ ...form, destination: e.target.value })}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <button type="submit">Search Trains</button>
      </form>
    </div>
  );
};

export default Home;
