import { decrement5, increment5 } from "../features/clock/clockSlice";
import ClockSumRestBtn from "./ClockSumRestBtn";
import ClockTimeInfo from "./ClockTimeInfo";
import { useSelector } from "react-redux";

const Clock = () => {
  const time = useSelector((state) => state.clock.countDownTime)

  return (
    <div className="mx-3 sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 shadow-[5px_5px_50px_rgba(47,46,60,1)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-center sm:text-3xl text-xl font-semibold leading-8 text-[#FBFAF8]">
          Tiempo de Enfoque
        </h1>
      </div>
      <div className="flex justify-center sm:px-4 gap-x-7">
        <ClockSumRestBtn operacion="-" manageTime={decrement5} />
        <ClockTimeInfo time={time?.minutes} unit="min" />
        <span className="text-3xl text-[#FBFAF8] mt-4 font-bold">:</span>
        <ClockTimeInfo time={time?.seconds} unit="sec" />
        <ClockSumRestBtn operacion="+" manageTime={increment5} />
      </div>
    </div>

  );

};
export default Clock;
