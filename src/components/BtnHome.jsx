import PropTypes from 'prop-types';
import { useState } from 'react';

const BtnHome = ({ icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <button onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className='text-lg font-bold tracking-wide capitalize transition duration-300 ease-in-out hover:border-b mr-9 text-slate-100 border-slate-100'><span className={`flex justify-center mb-1 text-2xl duration-200 ${isHovered ? "-translate-y-2 scale-110 " : ""}`}>{icon}</span>{text}</button>
  )
}

BtnHome.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default BtnHome;