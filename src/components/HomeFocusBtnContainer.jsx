import PropTypes from 'prop-types';

import { FaPlay, FaPause, FaStop } from "react-icons/fa"
import { CiPlay1 } from "react-icons/ci"
import HomeFocusBtn from "./HomeFocusBtn"


const HomeFocusBtnContainer = ({ focusTime, continueOrFinish, startFocus, pauseFocus, setShowBanner, text }) => {
    const textArray = text || ["", "", "", ""]
    return (
        <>
            <HomeFocusBtn focusTime={focusTime} continueOrFinish={continueOrFinish} icon={<FaPlay />} text={textArray[0]} func={startFocus} colorIcon={"limeGreen"} />
            <HomeFocusBtn focusTime={!focusTime} icon={<FaPause />} text={textArray[1]} func={pauseFocus} colorIcon={"indianRed"} />
            {continueOrFinish && <div className="flex gap-4"><HomeFocusBtn focusTime={focusTime} icon={<CiPlay1 />} text={textArray[2]} colorIcon={"limeGreen"} func={startFocus} /><HomeFocusBtn focusTime={focusTime} icon={<FaStop />} text={textArray[3]} func={setShowBanner} colorIcon={"indianRed"} /></div>}
        </>
    )
}

HomeFocusBtnContainer.propTypes = {
    focusTime: PropTypes.bool.isRequired,
    continueOrFinish: PropTypes.bool.isRequired,
    startFocus: PropTypes.func.isRequired,
    pauseFocus: PropTypes.func.isRequired,
    setShowBanner: PropTypes.func.isRequired,
    text: PropTypes.array
};
export default HomeFocusBtnContainer