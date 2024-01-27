import PropTypes from 'prop-types';

const ClockSumRestBtn = ({ operacion, manageTime }) => {
    return (
        <div><button onClick={manageTime} className="text-5xl text-[#FBFAF8] font-bold mt-2">{operacion}</button></div>
    )
}

ClockSumRestBtn.propTypes = {
    operacion: PropTypes.string.isRequired,
    manageTime: PropTypes.func.isRequired,
};

export default ClockSumRestBtn;