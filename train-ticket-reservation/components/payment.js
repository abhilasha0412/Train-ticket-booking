// src/components/Payment.js
import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const trainId = params.get("trainId");
  const seat = params.get("seat");

  const handlePayment = () => {
    alert("Payment successful!");
    history.push("/");
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Train ID: {trainId}</p>
      <p>Seat: {seat}</p>
      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
};

export default Payment;
