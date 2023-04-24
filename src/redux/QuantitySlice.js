import { createSlice } from "@reduxjs/toolkit";

export const QuanitySlice = createSlice({
  name: "Quantity",
  initialState: {
    adult: 0,
    children: 0,
    totalChild: 0
  },
  reducers: {
    addAdult: (state) => {
      state.adult = state.adult + 1;
    },
    subtractAdult: (state) => {
      state.adult = state.adult - 1;
    },
    addChildren: (state) => {
      state.children = state.children + 1;
    },
    subtractChildren: (state) => {
      state.children = state.children - 1;
    },
    totalChildren: (state) => {
      state.totalChild = state.children * 500;
    }
  }
});

export const {
  addAdult,
  subtractAdult,
  addChildren,
  subtractChildren,
  totalChildren
} = QuanitySlice.actions;
export default QuanitySlice.reducer;
