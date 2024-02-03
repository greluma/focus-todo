import { useDispatch } from "react-redux";
import { setIsSoundListActive, setTheSound } from "../features/clock/clockSlice";
import PropTypes from 'prop-types';
import { searchSound } from "../utils/sounds";


function btnSoundFunc(e, dispatch) {
    const list = document.querySelectorAll('.list-element')
    e.preventDefault()
    dispatch(setIsSoundListActive())
    if (e.target.textContent === "Salir") {
        list[0].firstElementChild.checked = true
        return
    }
    list.forEach((element) => {
        const input = element.querySelector('input')
        if (input.checked && input.value !== "0") {
            const sound = searchSound(+input.value).sound
            dispatch(setTheSound(sound))
        } else if (input.checked && input.value === "0") {
            dispatch(setTheSound(null))
        }
    })
}

const SoundBannerBtn = ({ text }) => {
    const dispatch = useDispatch()

    return (
        <button onClick={(e) => {
            btnSoundFunc(e, dispatch)
        }} type="submit" className="btnSoundBanner">{text}</button>
    )
}

SoundBannerBtn.propTypes = {
    text: PropTypes.string
}

export default SoundBannerBtn
