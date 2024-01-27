import { useState } from "react";
import ClockSumRestBtn from "./ClockSumRestBtn";
import ClockTimeInfo from "./ClockTimeInfo";

const Clock = () => {
  const [countDownTime, setCountDownTime] = useState({ minutes: 30, seconds: 0 });

  function manageTime(e) {
    if (e.target.innerText === "-") {
      if (countDownTime.minutes === 0) {
        return;
      }
      setCountDownTime({ ...countDownTime, minutes: countDownTime.minutes - 5 });
    } else {
      setCountDownTime({ ...countDownTime, minutes: countDownTime.minutes + 5 });
    }
  }

  return (
    <div className="mx-3 sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 shadow-[5px_5px_50px_rgba(47,46,60,1)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-center sm:text-3xl text-xl font-semibold leading-8 text-[#FBFAF8]">
          Tiempo de Enfoque
        </h1>
      </div>
      <div className="flex justify-center sm:px-4 gap-x-7">
        <ClockSumRestBtn operacion="-" manageTime={manageTime} />
        <ClockTimeInfo time={countDownTime?.minutes} unit="min" />
        <span className="text-3xl text-[#FBFAF8] mt-4 font-bold">:</span>
        <ClockTimeInfo time={countDownTime?.seconds} unit="sec" />
        <ClockSumRestBtn operacion="+" manageTime={manageTime} />
      </div>
    </div>

  );

};
export default Clock;
