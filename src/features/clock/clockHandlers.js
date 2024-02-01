import { callFinishToast } from "../../utils/callToast";
import playAudio from "../../utils/playAudio";

export function handlerTime(state, action, operation) {
  const { time, unit } = action.payload;
  const { minutes } = state.countDownTime;
  switch (operation) {
    case "increment":
      !state.focusTime && (state.initialTime[unit] += time);
      state.countDownTime[unit] += time;
      break;
    case "decrement":
      !state.focusTime && minutes > 0 && (state.initialTime[unit] -= time);
      state.countDownTime[unit] -= time;
      minutes <= 0 && (state.countDownTime.minutes = 0);

      break;
  }
}

export function handleChangeMinute(state, operation) {
  switch (operation) {
    case "decrement":
      state.countDownTime.seconds = 60;
      state.countDownTime.minutes -= 1;
      break;
    case "increment":
      state.countDownTime.seconds = -1;
      state.countDownTime.minutes += 1;
      break;
  }
  if (state.totalMinutesFocus) state.totalMinutesFocus++;
}

export function handleFinishPomodoro(state) {
  const totalMinutes = state.totalMinutesFocus;
  state.focusTime = false;
  state.continueOrFinish = false;
  clearInterval(state.intervalId);
  state.isPomodoroActive = false;
  playAudio();
  callFinishToast(totalMinutes);
  state.totalMinutesFocus = 0;
  handlerResetTimer(state);
}

export const handlerResetTimer = (state) => {
  switch (state.timeMode) {
    case "temporizador":
      state.countDownTime = state.initialTime;
      break;
    case "cronometro":
      state.countDownTime = { minutes: 0, seconds: 0 };
      break;
  }
  if (state.totalMinutesFocus.minutes !== state.initialTime.minutes) {
    state.totalMinutesFocus = 0;
  }
};
