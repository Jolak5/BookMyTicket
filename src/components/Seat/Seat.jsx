import "./Seat.css";

import { SeatImage } from "../../assets/icon";
import { Arrow } from "../../assets/icon";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

const Seat = () => {
  const times = 7; // Number of times to render the element

  // Render a single element multiple times using map
  const renderElementMultipleTimes = () => {
    return Array.from({ length: times }, (_, index) => (
      <SeatImage key={index} id={index} value={`Seat ${index}`} />
    ));
  };

  return (
    <div>
      <div className='go-back-div'>
        <Arrow />
        <h1>Seat Layout</h1>
      </div>
      <div className="seat-arrangement">
        <p className="sreen-p">Screen</p>
        <div className='seat-container'>
          {/* Render the element multiple times */}
          <div className='seat-number'>
            <p>A</p>
            {renderElementMultipleTimes()}
          </div>
          <div className='seat-number'>
            <p>B</p>
            {renderElementMultipleTimes()}
          </div>
          <div className='seat-number'>
            <p>C</p>
            {renderElementMultipleTimes()}
          </div>
          <div className='seat-number'>
            <p>D</p>
            {renderElementMultipleTimes()}
          </div>
          <div className='seat-number'>
            <p>E</p>
            {renderElementMultipleTimes()}
          </div>
          <div className='seat-number'>
            <p>F</p>
            {renderElementMultipleTimes()}
          </div>
        </div>
        <p className="sreen-p">Back</p>
      </div>
      <div className='continue-container'>
        {" "}
        <NavLink className='continue-button' to={`ConfirmBooking`}>
          Continue
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Seat;
