import PropTypes from 'prop-types';

const BtnHome = ({ icon, text }) => {
  return (
    <button className='text-lg font-bold tracking-wide capitalize mr-9 text-slate-100'><span className='flex justify-center mb-1 text-2xl'>{icon}</span>{text}</button>
  )
}

BtnHome.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default BtnHome;