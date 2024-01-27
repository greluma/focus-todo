import PropTypes from 'prop-types';

const HomeFocusBtn = ({ focusTime, icon, text, func, continueOrFinish }) => {
  return (
    <button onClick={func} className={`flex items-center justify-center py-2 font-bold tracking-wider rounded-full bg-slate-300 px-7 text-blue-950 ${focusTime || continueOrFinish ? "hidden" : ""}`}>
      <div className="mr-2">{icon}</div> {text}
    </button>
  )
}

HomeFocusBtn.propTypes = {
  focusTime: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  func: PropTypes.func.isRequired,
  continueOrFinish: PropTypes.bool,
};

export default HomeFocusBtn