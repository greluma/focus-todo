import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countDownTime: { minutes: 30, seconds: 15 },
  initialTime: { minutes: 30, seconds: 0 },
  focusTime: false,
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (action.payload.unit === "min") {
        if (!state.focusTime) {
          state.initialTime.minutes += action.payload.time;
        }
        state.countDownTime.minutes += action.payload.time;
        return;
      }
      state.countDownTime.seconds += action.payload.time;
    },

    decrement: (state, action) => {
      if (state.countDownTime.minutes <= 0) {
        return;
      }
      if (action.payload.unit === "min") {
        if (!state.focusTime) {
          state.initialTime.minutes -= action.payload.time;
        }
        state.countDownTime.minutes -= action.payload.time;
        return;
      }
      if (state.countDownTime.seconds === 0) {
        state.countDownTime.seconds = 60;
        state.countDownTime.minutes -= 1;
      }
      state.countDownTime.seconds -= action.payload.time;
    },

    changeFocusTime: (state, action) => {
      state.focusTime = action.payload;
    },

    resetTimer: (state) => {
      state.countDownTime = state.initialTime;
    },
  },
});

export const { increment, decrement, changeFocusTime, resetTimer } =
  clockSlice.actions;

export default clockSlice.reducer;
