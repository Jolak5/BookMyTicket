import "./Quickbooking.css";

export default function Quickbooking() {
  return (
    <div className='quick-booking'>
      <h1>Quick booking</h1>
      <form action='#' className='form'>
        <select name='' id=''>
          <option value='Lagos'>Select Location</option>
          <option value='City'>City</option>
          <option value='Abuja'>Abuja</option>
          <option value='Ibadan'>Ibadan</option>
        </select>
        <select name='' id=''>
          <option value='Lagos'>Select Date</option>
          <option value='24/03'>24/03</option>
          <option value='25/03'>25/03</option>
          <option value='26/03'>26/03</option>
          <option value='27/03'>27/03</option>
        </select>
        <select name='' id=''>
          <option value='Lagos'>Select Movie</option>
          <option value='Lagos'>Category</option>
          <option value='Lagos'>Category</option>
          <option value='Lagos'>Category</option>
        </select>
        <select name='' id=''>
          <option value='Lagos'>Select Theatre</option>
          <option value='FILM HOUSE CINEMA NEAR LANDMARK CENTER'>
            LANDMARK CENTER
          </option>
          <option value='GENESIS DELUXE MAROKO, LAGOS'>
            GENESIS DELUXE MAROKO, LAGOS
          </option>
          <option value='VENTRUE CINEMA, IBADAN'>VENTRUE CINEMA, IBADAN</option>
        </select>
        <select name='' id=''>
          <option value='Lagos'>Select Time</option>
          <option value='Lagos'>9.00 AM</option>
          <option value='Lagos'>7.00 PM</option>
          <option value='Lagos'>8.00 PM</option>
        </select>
        <input className="submit-quick-booking-button" type='submit' value='Submit' placeholder='Submit' />
      </form>
    </div>
  );
}
