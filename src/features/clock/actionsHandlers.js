import {
  changeFocusTime,
  decrement,
  resetTimer,
  newIntervalId,
  clearIntervalHandler,
  setContinueOrFinish,
  increment,
  setIsPomodoroActive,
  setIsMainBannerActive,
} from "./clockSlice";

import { callFinishToast } from "../../utils/callToast";

export const handleStartFocus = (dispatch, operation) => {
  dispatch(setContinueOrFinish(false));
  dispatch(changeFocusTime(true));
  dispatch(
    newIntervalId(
      setInterval(() => {
        switch (operation) {
          case "increment":
            dispatch(increment({ unit: "seconds", time: 1 }));
            break;
          case "decrement":
            dispatch(decrement({ unit: "seconds", time: 1 }));
            break;
          default:
            break;
        }
      }, 1000)
    )
  );
  dispatch(setIsPomodoroActive(true));
};

export const handlePauseFocus = (dispatch) => {
  dispatch(changeFocusTime(false));
  dispatch(clearIntervalHandler());
  dispatch(setContinueOrFinish(true));
};

export const handleStopFocus = (
  dispatch,
  totalMinutesFocus,
  isMainBannerActive
) => {
  dispatch(changeFocusTime(false));
  dispatch(clearIntervalHandler());
  dispatch(setContinueOrFinish(false));
  dispatch(resetTimer());
  callFinishToast(totalMinutesFocus);
  dispatch(setIsPomodoroActive(false));
  isMainBannerActive && dispatch(setIsMainBannerActive());
};
