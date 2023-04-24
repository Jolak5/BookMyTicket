import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./homepageSlice";
import BookingReducer from "./bookingSlice";
import QuantityReducer from "./QuantitySlice";

export default configureStore({
  reducer: {
    Movies: MovieReducer,
    Booking: BookingReducer,
    Quantity: QuantityReducer
  }
});
