import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';


const ClockSumRestBtn = ({ operacion, manageTime }) => {
    const dispatch = useDispatch()
    return (
        <div className='transition-transform duration-200 hover:scale-110 '><button onClick={() => dispatch(manageTime({ unit: "minutes", time: 5 }))} className={`text-2xl md:text-3xl xl:5xl font-bold mt-4  text-[#FBFAF8] `}>{operacion}</button></div>
    )
}

ClockSumRestBtn.propTypes = {
    operacion: PropTypes.string.isRequired,
    manageTime: PropTypes.func.isRequired,
};

export default ClockSumRestBtn;