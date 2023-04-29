// import RenderNav from "../Navbar/RenderNav";
import { NavLink } from "react-router-dom";
import BookingHero from "./BookingHero";
import Bookingdetails from "./Bookingdetails";
import Footer from "../Footer/Footer";

export default function Bookings() {
  return (
    <div>
        <BookingHero />
        <Bookingdetails />
        <div className="continue-container"> <NavLink className="continue-button" to={`BookNow`}>Continue</NavLink></div>
       
        <Footer />
    </div>
  )
}
