import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberValue: 1,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue++;
    },
    decrement: (state) => {
      state.numberValue--;
    },
  },
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
export const selectNumber = (store) => store.number.numberValue;
