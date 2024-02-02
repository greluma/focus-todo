import { useDispatch, useSelector } from 'react-redux';
import HeadingsContainerClockBanner from './HeadingsContainerClockBanner';
import { handleStartFocus, handlePauseFocus } from '../features/clock/actionsHandlers';
import { handleShowBanner, setIsMainBannerActive } from '../features/clock/clockSlice';
import HomeFocusBtnContainer from './HomeFocusBtnContainer';
import { IoMdCloseCircle } from "react-icons/io";
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

    function handleFullScreen() {
        dispatch(setIsMainBannerActive())
    }


    //  hidden - banner se muestre
    return (
        <div className={`fixed top-0 ${!isMainBannerActive && "hidden"} inset-0 z-10 animate-fadeIn  w-screen h-screen text-slate-200 bg-slate-950`}>
            <button onClick={handleFullScreen} className='fixed text-2xl transition duration-300 ease-in-out md:text-3xl text-slate-300 top-3 left-3 hover:scale-110 hover:text-red-300'><IoMdCloseCircle /></button>
            <div className='grid justify-center h-full gap-8 place-items-center'>
                <div className='flex items-end justify-center h-full gap-8 sm:gap-12 md:gap-14 lg:gap-20 xl:gap-24 sm text-slate-300'>

                    {/* minutes */}
                    <HeadingsContainerClockBanner time={minutes} />
                    {/* seconds */}
                    <HeadingsContainerClockBanner time={seconds} />


                </div>
                <div className='h-full'>
                    <HomeFocusBtnContainer focusTime={focusTime} continueOrFinish={continueOrFinish} startFocus={startFocus} pauseFocus={pauseFocus} setShowBanner={setShowBanner} />
                </div>
            </div>
        </div>
    )
}
export default ClockBanner






