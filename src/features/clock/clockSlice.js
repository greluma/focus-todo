import { createSlice } from "@reduxjs/toolkit";
import callToast from "../../utils/callToast";

function playAudio() {
  const audio = new Audio("./clock-alarm.mp3");
  audio.play();
}

// * Estado inicial del temporizador
const initialStateTimer = { minutes: 0, seconds: 5 };

const initialState = {
  countDownTime: initialStateTimer,
  initialTime: initialStateTimer,
  focusTime: false,
  intervalId: null,
  showBanner: false,
  continueOrFinish: false,
  totalMinutesFocus: initialStateTimer.minutes,
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    clearIntervalHandler: (state) => {
      clearInterval(state.intervalId);
      state.intervalId = null;
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
      const { time, unit } = action.payload;
      // TODO (las siguientes 2 lineas se repiten en increment y decrement hay que refactorizar): Si el temporizador está en modo de descanso, se incrementa el tiempo inicial
      !state.focusTime && (state.initialTime[unit] += time);
      state.countDownTime[unit] += time;
      state.totalMinutesFocus += time;
    },

    decrement: (state, action) => {
      const { time, unit } = action.payload;
      const { minutes, seconds } = state.countDownTime;

      // * Marca cuando el temporizador llega a 0
      if (minutes <= 0 && seconds <= 0 && state.focusTime) {
        state.countDownTime = state.initialTime;
        state.focusTime = false;
        state.continueOrFinish = false;
        clearInterval(state.intervalId);
        playAudio();
        callToast(
          `¡Felicidades! Has terminado un Pomodoro de ${state.totalMinutesFocus} minutos`
        );
        state.totalMinutesFocus = state.initialTime.minutes;

        return;
      }

      // * Marca el cambio de minuto y segundos
      if (seconds === 0 && state.focusTime) {
        state.countDownTime.seconds = 60;
        state.countDownTime.minutes -= 1;
      }

      // * Si el temporizador está en modo de descanso, se decrementa el tiempo inicial
      !state.focusTime && minutes > 0 && (state.initialTime[unit] -= time);
      state.countDownTime[unit] -= time;
      minutes <= 0 && (state.countDownTime.minutes = 0);
      if (time === 5) {
        state.totalMinutesFocus -= time;
      }
    },

    changeFocusTime: (state, action) => {
      state.focusTime = action.payload;
    },

    resetTimer: (state) => {
      state.countDownTime = state.initialTime;
      state.totalMinutesFocus = state.initialTime.minutes;
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
} = clockSlice.actions;

export default clockSlice.reducer;
