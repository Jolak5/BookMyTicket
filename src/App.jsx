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
import { useDispatch } from "react-redux";
import Bookings from "./components/Booking/Bookings";
import Quanity from "./components/Quanity/Quanity";
import Seat from "./components/Seat/Seat";
import Comfirmbooking from "./components/ConfimBooking/ComfirmBooking";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RenderNav />}>
      <Route index element={<Homepage />} />
      <Route path='/home/:id' index element={<Bookings />} />
      <Route path='/home/:id/BookNow' element={<Quanity />} />
      <Route path='/home/:id/BookNow/seat' element={<Seat />} />
      <Route path='/home/:id/BookNow/seat/ConfirmBooking' element={<Comfirmbooking />} />

    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
