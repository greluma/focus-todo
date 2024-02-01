import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const HomeFocusBtn = ({ focusTime, icon, text, func, continueOrFinish, colorIcon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { timeMode, initialTime: { minutes } } = useSelector((state) => state.clock)
  const operation = timeMode === "temporizador" ? "decrement" : "increment";


  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => { func(operation) }}
      className={` flex items-center justify-center py-2 font-bold tracking-wider rounded-full bg-slate-300 px-7 text-blue-950 ${focusTime || continueOrFinish ? "hidden" : ""} transition ease-in-out duration-500 ${minutes === 0 ? "" : "hover:bg-slate-700 hover:text-slate-300"} text-sm md:text-base 
      
      `}
      disabled={minutes === 0}
    >
      {minutes === 0 ? "Añadir Tiempo" : <><div className="mr-2 transition duration-100" style={{ color: isHovered ? `${colorIcon}` : '' }}>{icon}</div>{text}</>}
    </button>
  )
}

HomeFocusBtn.propTypes = {
  focusTime: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  func: PropTypes.func,
  continueOrFinish: PropTypes.bool,
  colorIcon: PropTypes.string,
};

export default HomeFocusBtn