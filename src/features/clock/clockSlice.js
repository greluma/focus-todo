import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countDownTime: { minutes: 0, seconds: 5 },
  initialTime: { minutes: 0, seconds: 5 },
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
      // * Marca cuando el temporizador llega a 0
      if (
        state.countDownTime.minutes <= 0 &&
        state.countDownTime.seconds <= 0
      ) {
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
