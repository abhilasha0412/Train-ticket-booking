// BookingSummary.js
const BookingSummary = ({ selectedTrain, selectedSeat }) => {
    const handlePayment = () => {
      // Handle payment logic using a payment gateway like Stripe
      alert("Payment successful! Booking confirmed.");
    };
  
    return (
      <div>
        <h3>Booking Summary</h3>
        <p>Train: {selectedTrain.name}</p>
        <p>Seat: {selectedSeat}</p>
        <button onClick={handlePayment}>Proceed to Pay</button>
      </div>
    );
  };
  