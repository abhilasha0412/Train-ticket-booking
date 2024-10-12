// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TrainResults from "./components/TrainResults";
import SeatSelection from "./components/SeatSelection";
import BookingSummary from "./components/BookingSummary";
import Payment from "./components/Payment";
import UserProfile from "./pages/UserProfile";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={TrainResults} />
        <Route path="/seat-selection" component={SeatSelection} />
        <Route path="/booking-summary" component={BookingSummary} />
        <Route path="/payment" component={Payment} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </Router>
  );
}

export default App;

