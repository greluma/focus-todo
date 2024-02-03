import { createSlice } from "@reduxjs/toolkit";
import background from "../../assets/main-background.jpg";
import {
  handleChangeMinute,
  handleFinishPomodoro,
  handlerResetTimer,
  handlerTime,
} from "./clockHandlers";

// * Estado inicial del temporizador
const initialStateTimer = { minutes: 30, seconds: 0 };

const initialState = {
  countDownTime: initialStateTimer,
  initialTime: initialStateTimer,
  focusTime: false,
  intervalId: null,
  showBanner: false,
  continueOrFinish: false,
  totalMinutesFocus: 0,
  image: background,
  timeMode: "temporizador",
  isPomodoroActive: false,
  isMainBannerActive: false,
  isSoundListActive: false,
  theSound: null,
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    clearIntervalHandler: (state) => {
      clearInterval(state.intervalId);
      state.intervalId = null;
    },

    setIsSoundListActive: (state) => {
      state.isSoundListActive = !state.isSoundListActive;
    },

    setTheSound: (state, action) => {
      state.theSound = action.payload;
    },

    setTimeMode: (state) => {
      if (state.timeMode === "temporizador") {
        state.timeMode = "cronometro";
        state.countDownTime = { minutes: 0, seconds: 0 };
        state.totalMinutesFocus = 0;
      } else {
        state.timeMode = "temporizador";
        state.countDownTime = state.initialTime;
      }
    },

    setIsPomodoroActive: (state, action) => {
      state.isPomodoroActive = action.payload;
    },
    setIsMainBannerActive: (state) => {
      state.isMainBannerActive = !state.isMainBannerActive;
    },

    setContinueOrFinish: (state, action) => {
      state.continueOrFinish = action.payload;
    },

    handleShowBanner: (state) => {
      state.showBanner = !state.showBanner;
    },

    newIntervalId: (state, action) => {
      state.intervalId = action.payload;
    },

    increment: (state, action) => {
      const { seconds } = state.countDownTime;

      // * Marca el cambio de minuto y segundos
      if (seconds === 59 && state.focusTime) {
        handleChangeMinute(state, "increment");
      }

      handlerTime(state, action, "increment");
    },

    decrement: (state, action) => {
      const { minutes, seconds } = state.countDownTime;

      // * Marca cuando el temporizador llega a 0
      if (minutes <= 0 && seconds <= 0 && state.focusTime) {
        handleFinishPomodoro(state);
        return;
      }

      // * Marca el cambio de minuto y segundos
      if (seconds === 0 && state.focusTime) {
        handleChangeMinute(state, "decrement");
      }

      handlerTime(state, action, "decrement");
    },

    changeImage: (state, action) => {
      state.image = action.payload;
    },

    changeFocusTime: (state, action) => {
      state.focusTime = action.payload;
    },

    resetTimer: (state) => {
      handlerResetTimer(state);
    },
  },
});

export const {
  increment,
  decrement,
  changeFocusTime,
  resetTimer,
  newIntervalId,
  clearIntervalHandler,
  handleShowBanner,
  setContinueOrFinish,
  changeImage,
  setTimeMode,
  setIsPomodoroActive,
  setIsMainBannerActive,
  setIsSoundListActive,
  setTheSound,
} = clockSlice.actions;

export default clockSlice.reducer;
