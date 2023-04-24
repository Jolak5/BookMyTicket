import { NavLink, Outlet } from "react-router-dom";
import './NavBar.css'
import Search from "../../assets/icon";
// import logo from '../../assets/logo.png'
export default function Navbar() {
  return (
    <div>
    <header>
      <h1 className="logo">BMT</h1>
      <nav>
      <Search />
      <NavLink to="/"  className='navlink'>Booking</NavLink>
      <NavLink className='navlink'>Food & Drinks</NavLink>
      <NavLink className='navlink'>Offer</NavLink>
      </nav>
      <nav className="cart">
      <NavLink>Account</NavLink>
      <NavLink>Cart</NavLink>
      </nav>
      
    </header>
    <main >
    <Outlet />
  </main>
  </div>
  )
}
