import { useSelector } from 'react-redux';
import HeadingsContainerClockBanner from './HeadingsContainerClockBanner';


const ClockBanner = () => {
    const { countDownTime: { minutes, seconds } } = useSelector((state) => state.clock)
    // top-0 hidden son las propiedades que hacen que el banner se muestre
    return (
        <div className="fixed top-0 w-screen h-screen text-slate-200 bg-slate-950">
            <div className='flex items-center justify-center h-full gap-8 sm:gap-12 md:gap-14 lg:gap-20 xl:gap-24 sm text-slate-300'>
                {/* minutes */}
                <HeadingsContainerClockBanner time={minutes} />
                {/* seconds */}
                <HeadingsContainerClockBanner time={seconds} />
            </div>
        </div>
    )
}
export default ClockBanner






