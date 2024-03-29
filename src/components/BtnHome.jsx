import PropTypes from 'prop-types';
import { useState } from 'react';

const BtnHome = ({ icon, text, func, disable }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <button onClick={func} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className={`text-xs font-bold tracking-wide capitalize transition duration-300 ease-in-out md:text-base hover:border-b ${disable ? "text-slate-400 border-none" : "text-slate-100 border-slate-100"} `} disabled={disable}><span className={`flex justify-center mb-1 text-xl md:text-2xl duration-200 ${isHovered ? "-translate-y-2 scale-110 " : ""}`}>{icon}</span>{text}</button>
  )
}

BtnHome.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  func: PropTypes.func,
  disable: PropTypes.bool
};

export default BtnHome;