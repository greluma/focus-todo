import { useDispatch, useSelector } from 'react-redux';
import HeadingsContainerClockBanner from './HeadingsContainerClockBanner';
import { handleStartFocus, handlePauseFocus } from '../features/clock/actionsHandlers';
import { handleShowBanner } from '../features/clock/clockSlice';
import HomeFocusBtnContainer from './HomeFocusBtnContainer';
handleShowBanner


const ClockBanner = () => {
    const { countDownTime: { minutes, seconds }, focusTime, continueOrFinish, isMainBannerActive } = useSelector((state) => state.clock)
    const dispatch = useDispatch()

    // * handlers
    function startFocus(operation) {
        handleStartFocus(dispatch, operation)
    }

    function pauseFocus() {
        handlePauseFocus(dispatch)
    }

    function setShowBanner() {
        dispatch(handleShowBanner())
    }


    //  hidden - banner se muestre
    return (
        <div className={`fixed top-0 ${!isMainBannerActive && "hidden"}  w-screen h-screen text-slate-200 bg-slate-950`}>
            <div className='grid justify-center h-full gap-8 place-items-center'>
                <div className='flex items-end justify-center h-full gap-8 sm:gap-12 md:gap-14 lg:gap-20 xl:gap-24 sm text-slate-300'>
                    {/* minutes */}
                    <HeadingsContainerClockBanner time={minutes} />
                    {/* seconds */}
                    <HeadingsContainerClockBanner time={seconds} />
                </div>
                <div className='h-full'>
                    {/*  <HomeFocusBtn focusTime={focusTime} continueOrFinish={continueOrFinish} icon={<FaPlay />} func={startFocus} colorIcon={"limeGreen"} />
                    <HomeFocusBtn focusTime={!focusTime} icon={<FaPause />} func={pauseFocus} colorIcon={"indianRed"} />
                    {continueOrFinish && <div className="flex gap-4"><HomeFocusBtn focusTime={focusTime} icon={<CiPlay1 />} colorIcon={"limeGreen"} func={startFocus} /><HomeFocusBtn focusTime={focusTime} icon={<FaStop />} func={setShowBanner} colorIcon={"indianRed"} /></div>} */}
                    <HomeFocusBtnContainer focusTime={focusTime} continueOrFinish={continueOrFinish} startFocus={startFocus} pauseFocus={pauseFocus} setShowBanner={setShowBanner} />
                </div>
            </div>
        </div>
    )
}
export default ClockBanner






