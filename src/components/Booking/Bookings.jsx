// import RenderNav from "../Navbar/RenderNav";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/footer";
import BookingHero from "./BookingHero";
import Bookingdetails from "./Bookingdetails";

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
