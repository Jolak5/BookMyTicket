import { createSlice } from "@reduxjs/toolkit";

export const BookingsSlice = createSlice({
  name: "Bookings",
  initialState: {
    location: "",
    date: "",
    theatre: "",
    time: ""
  },
  reducers: {
    bookLocation: (state, action) => {
      return { ...state, location: action.payload };
    },
    bookDate: (state, action) => {
      return { ...state, date: action.payload };
    },
    bookTheatre: (state, action) => {
      return { ...state, theatre: action.payload };
    },
    bookTime: (state, action) => {
      return { ...state, time: action.payload };
    }
  }
});

export const { bookLocation, bookDate, bookTheatre, bookTime } =
  BookingsSlice.actions;
export default BookingsSlice.reducer;
