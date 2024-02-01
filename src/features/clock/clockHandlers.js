import callToast from "../../utils/callToast";
import playAudio from "../../utils/playAudio";

export function handlerTime(state, action, operation) {
  const { time, unit } = action.payload;
  const { minutes } = state.countDownTime;
  switch (operation) {
    case "increment":
      !state.focusTime && (state.initialTime[unit] += time);
      state.countDownTime[unit] += time;
      state.totalMinutesFocus += time;
      break;
    case "decrement":
      !state.focusTime && minutes > 0 && (state.initialTime[unit] -= time);
      state.countDownTime[unit] -= time;
      minutes <= 0 && (state.countDownTime.minutes = 0);
      if (time === 5 && minutes > 0) {
        state.totalMinutesFocus -= time;
      }
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
}

export function handleFinishPomodoro(state) {
  state.focusTime = false;
  state.continueOrFinish = false;
  clearInterval(state.intervalId);
  playAudio();
  callToast(
    `¡Felicidades! Has terminado un Pomodoro de ${state.totalMinutesFocus} minutos`
  );
  state.totalMinutesFocus = state.initialTime.minutes;
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
  state.totalMinutesFocus = state.initialTime.minutes;
};
