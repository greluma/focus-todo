import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';


const SoundBannerBtn = ({ text, func }) => {
    const dispatch = useDispatch()
    const { theSound } = useSelector((state) => state.clock)
    return (
        <button onClick={(e) => {
            func(e, dispatch, theSound)
        }} type="submit" className="btnSoundBanner">{text}</button>
    )
}

SoundBannerBtn.propTypes = {
    text: PropTypes.string,
    func: PropTypes.func.isRequired
}

export default SoundBannerBtn
