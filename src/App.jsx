import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import RenderNav from "./components/Navbar/RenderNav";
import Homepage from "./components/Homepage/Homepage";
import { useEffect } from "react";
import { getMovies } from "./redux/homepageSlice";
import { useDispatch, useSelector } from "react-redux";
import Bookings from "./components/Booking/Bookings";
import Quanity from "./components/Quanity/Quanity";
import Seat from "./components/Seat/Seat";
import Comfirmbooking from "./components/ConfimBooking/ComfirmBooking";
import Payment from "./components/Payment/Payment";
import { PulseLoader } from 'react-spinners';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RenderNav />}>
      <Route index element={<Homepage />} />
      <Route path='/home/:id' index element={<Bookings />} />
      <Route path='/BookNow' element={<Quanity />} />
      <Route path='/home/:id/BookNow' element={<Quanity />} />
      <Route path='/home/:id/BookNow/seat' element={<Seat />} />
      <Route path='/home/:id/BookNow/seat/ConfirmBooking' element={<Comfirmbooking />} />
      <Route path='/home/:id/BookNow/seat/ConfirmBooking/payment' element={<Payment />} />


    </Route>
  )
);

function App() {
const isLoading = useSelector((state) => state.Movies.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

if(isLoading) {
  return (
    <div >
      <h1 style={{
        fontSize: "1.5rem",
        position: "absolute",
        top: "50%",
        left: "40%"
      }}>Loading... <PulseLoader style={{display:"inline"}}  color="#123abc" /></h1>
      
    </div>
  );
}

  return <RouterProvider router={router} />;
}

export default App;
