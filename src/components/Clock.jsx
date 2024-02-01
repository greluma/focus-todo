import { decrement, increment } from "../features/clock/clockSlice";
import ClockSumRestBtn from "./ClockSumRestBtn";
import ClockTimeInfo from "./ClockTimeInfo";
import { useSelector } from "react-redux";

const Clock = () => {
  const clockState = useSelector((state) => state.clock)
  const time = clockState.countDownTime
  const timeMode = clockState.timeMode;

  return (
    <div className=" sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 shadow-[5px_5px_50px_rgba(47,46,60,1)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-lg  md:text-2xl tracking-widest font-semibold leading-8 text-[#FBFAF8]">
          Tiempo de Enfoque
        </h1>
      </div>
      <div className="flex justify-center sm:px-4 gap-x-7">
        {timeMode === "temporizador" && <ClockSumRestBtn operacion="-" manageTime={decrement} />}
        <ClockTimeInfo time={time?.minutes} unit="m" />
        <span className="text-2xl md:text-3xl xl:5xl text-[#FBFAF8] mt-4 font-bold">:</span>
        <ClockTimeInfo time={time?.seconds} unit="s" />
        {timeMode === "temporizador" && <ClockSumRestBtn operacion="+" manageTime={increment} />}
      </div>
    </div>

  );

};
export default Clock;
