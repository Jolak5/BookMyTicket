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
        <NavLink to={`BookNow`}>Continue</NavLink>
        <Footer />
    </div>
  )
}
