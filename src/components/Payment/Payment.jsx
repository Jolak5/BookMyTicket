import { NavLink } from "react-router-dom";
import { Arrow } from "../../assets/icon";
import './payment.css'
import Footer from "../Footer/Footer";


export default function Payment() {
  return <div>
    <div className="go-back-div">
      <Arrow />
      <h1>Payment Details</h1>
      </div>
    
      <section className="form-container">
        <h1>Add Card Details</h1>
        <form action="">
          <label name="number" htmlFor="">Card Number</label>
          <input type="number" name="card" id="card-number" placeholder="e.g 1987864276472"/>
          <label name="name" htmlFor="">Card Name</label>
          <input type="text" name="name" id="name" placeholder="e.g john doe"/>
          <div className="cvv-container">
            <div><label name="expiry" htmlFor="">Expiry Data</label>
            <input type="text" name="expiry" id="expiry" /></div>
            <div>  <label htmlFor="cvv">CVV</label>
            <input type="number" name="cvv" id="cvv" placeholder="e.g 333" /></div>
          
           
          </div>
          <label  htmlFor="password"></label>
            <input type="password" name="password" id="password" />
            <div className="continue-container"> <NavLink className="continue-button" to={`BookNow`}>Pay</NavLink></div>
        </form>
      
      </section>
      <Footer />
  </div>;
}
