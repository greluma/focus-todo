import PropTypes from 'prop-types';
import { useState } from 'react';

const HomeFocusBtn = ({ focusTime, icon, text, func, continueOrFinish, colorIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={func}
      className={`flex items-center justify-center py-2 font-bold tracking-wider rounded-full bg-slate-300 px-7 text-blue-950 ${focusTime || continueOrFinish ? "hidden" : ""} transition ease-in-out duration-500 hover:bg-slate-700 hover:text-slate-300 text-sm md:text-base`}
    >
      <div className="mr-2 transition duration-100" style={{ color: isHovered ? `${colorIcon}` : '' }}>{icon}</div> {text}
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