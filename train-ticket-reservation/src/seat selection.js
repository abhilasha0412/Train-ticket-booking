// SeatSelection.js
const SeatSelection = ({ selectedTrain }) => {
    const [selectedSeat, setSelectedSeat] = useState(null);
  
    const seats = Array(50).fill(true); // Mock array representing seat availability
  
    const handleSeatClick = (index) => {
      setSelectedSeat(index);
    };
  
    return (
      <div>
        <h3>Select Your Seat</h3>
        <div className="seats-grid">
          {seats.map((available, index) => (
            <button
              key={index}
              onClick={() => handleSeatClick(index)}
              className={available ? "available" : "unavailable"}
              disabled={!available}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  