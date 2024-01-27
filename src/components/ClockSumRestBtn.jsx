import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ClockSumRestBtn = ({ operacion, manageTime }) => {
    const dispatch = useDispatch()
    return (
        <div><button onClick={() => dispatch(manageTime())} className="text-5xl text-[#FBFAF8] font-bold mt-2">{operacion}</button></div>
    )
}

ClockSumRestBtn.propTypes = {
    operacion: PropTypes.string.isRequired,
    manageTime: PropTypes.func.isRequired,
};

export default ClockSumRestBtn;