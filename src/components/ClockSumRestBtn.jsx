import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';


const ClockSumRestBtn = ({ operacion, manageTime }) => {
    const dispatch = useDispatch()
    return (
        <div><button onClick={() => dispatch(manageTime({ unit: "min", time: 5 }))} className="text-5xl font-bold mt-2 text-[#FBFAF8]">{operacion}</button></div>
    )
}

ClockSumRestBtn.propTypes = {
    operacion: PropTypes.string.isRequired,
    manageTime: PropTypes.func.isRequired,
};

export default ClockSumRestBtn;