import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countDownTime: { minutes: 30, seconds: 25 },
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    increment5: (state) => {
      state.countDownTime.minutes += 5;
    },
    decrement5: (state) => {
      if (state.countDownTime.minutes <= 0) {
        return;
      }
      state.countDownTime.minutes -= 5;
    },
  },
});

export const { increment5, decrement5 } = clockSlice.actions;

export default clockSlice.reducer;
