import { useDispatch } from "react-redux";
import { setIsSoundListActive } from "../features/clock/clockSlice";
import PropTypes from 'prop-types';

function test(e, dispatch) {
    e.preventDefault()
    dispatch(setIsSoundListActive())
    console.log("Hello");
}

const SoundBannerBtn = ({ text }) => {
    const dispatch = useDispatch()

    return (
        <button onClick={(e) => {
            test(e, dispatch)
        }} type="submit" className="btnSoundBanner">{text}</button>
    )
}

SoundBannerBtn.propTypes = {
    text: PropTypes.string
}

export default SoundBannerBtn
