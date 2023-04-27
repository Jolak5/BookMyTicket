import { NavLink } from "react-router-dom";
import { Arrow } from "../../assets/icon";

export default function Payment() {
  return <div>
        <Arrow />
      <h1>Confirm Booking</h1>
      <section>
        <h1>Add Card Details</h1>
        <form action="">
          <label name="number" htmlFor="">Card Number</label>
          <input type="number" name="card" id="card-number" placeholder="e.g 1987864276472"/>
          <label name="name" htmlFor=""></label>
          <input type="text" name="name" id="name" placeholder="e.g john doe"/>
          <div>
            <label name="expiry" htmlFor="">Expiry Data</label>
            <input type="text" name="expiry" id="expiry" />
            <label htmlFor="cvv">CVV</label>
            <input type="number" name="cvv" id="cvv" placeholder="e.g 333" />
           
          </div>
          <label  htmlFor="password"></label>
            <input type="password" name="password" id="password" />
            <div className="continue-container"> <NavLink className="continue-button" to={`BookNow`}>Proceed to Payment</NavLink></div>
        </form>
      </section>
  </div>;
}
