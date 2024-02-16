import PropTypes from 'prop-types';

export default function TaskIcon({ icon, color, handleFunction }) {
    return (
        <button style={{ color: color }} onClick={handleFunction} className='transition-myTransition hover:scale-110 text-lg'>
            {icon}
        </button>
    )
}

TaskIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
    handleFunction: PropTypes.func.isRequired,
}