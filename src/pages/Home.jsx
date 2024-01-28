import { useState } from "react";
// icons
import { FaAngleDown } from "react-icons/fa6";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { ImMusic } from "react-icons/im";
import { BsClockHistory } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
// assets
import backgroundImage from '../assets/main-background.jpg';
// components
import Clock from "../components/Clock"
import BtnHome from "../components/BtnHome";
import HomeFocusBtn from "../components/HomeFocusBtn";
// redux
import { useDispatch, useSelector } from "react-redux";
import { changeFocusTime, decrement, resetTimer, newIntervalId, clearIntervalHandler, handleShowBanner } from "../features/clock/clockSlice";
import Banner from "../components/Banner";

const Home = () => {
    const clockState = useSelector((state) => state.clock)
    const focusTime = clockState.focusTime
    const showBanner = clockState.showBanner
    const dispatch = useDispatch()
    const [continueOrFinish, setContinueOrFinish] = useState(false)

    function startFocus() {
        setContinueOrFinish(false)
        dispatch(changeFocusTime(true));
        dispatch(newIntervalId(setInterval(() => {
            dispatch(decrement({ unit: "seconds", time: 1 }))
        }, 1000)))
    }

    function pauseFocus() {
        dispatch(changeFocusTime(false));
        dispatch(clearIntervalHandler())
        setContinueOrFinish(true)
    }

    function stopFocus() {
        setContinueOrFinish(false)
        dispatch(changeFocusTime(false));
        dispatch(resetTimer())
        dispatch(clearIntervalHandler())
    }

    function setShowBanner() {
        dispatch(handleShowBanner())
    }

    return (
        <>
            <div className={`min-h-screen p-5 bg-center bg-cover transition duration-300 ease-in-out ${showBanner ? 'opacity-90' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="grid grid-cols-3 m-auto justify-items-start">
                    <button className="text-3xl text-slate-200"><FaAngleDown /></button>
                    <button className="py-2 font-bold tracking-wider rounded-full bg-slate-700 text-slate-300 px-7 justify-self-center">Seleccione una tarea...</button>
                </div>
                <div className="h-[70vh] grid justify-center content-center grid-rows-5">
                    <div className="flex items-center justify-center row-span-4">
                        <Clock />
                    </div>
                    <div className="row-span-1 m-auto mt-4">
                        <HomeFocusBtn focusTime={focusTime} continueOrFinish={continueOrFinish} icon={<FaPlay />} text="Comenzar a Enfocarse" func={startFocus} />
                        <HomeFocusBtn focusTime={!focusTime} icon={<FaPause />} text="Pausa" func={pauseFocus} />
                        {continueOrFinish && <div className="flex gap-4"><HomeFocusBtn focusTime={focusTime} icon={<CiPlay1 />} text="Continuar" func={startFocus} /><HomeFocusBtn focusTime={focusTime} icon={<FaStop />} text="Terminar" func={setShowBanner} /></div>}
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <BtnHome icon={<BsClockHistory />} text="pantalla completa" />
                    <BtnHome icon={<CgSandClock />} text="modo temporizador" />
                    <BtnHome icon={<ImMusic />} text="sonido de fondo" />
                </div>
            </div>
            {showBanner && <Banner setShowBanner={setShowBanner} stopFocus={stopFocus} />}
        </>

    )
}
export default Home