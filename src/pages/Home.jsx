import { useMediaQuery } from 'react-responsive';
// icons
import { FaAngleDown } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { GrImage } from "react-icons/gr";
import { ImMusic } from "react-icons/im";
import { GoScreenFull } from "react-icons/go";
import { TiStopwatch } from "react-icons/ti";
// components
import Clock from "../components/Clock"
import BtnHome from "../components/BtnHome";
// redux
import { useDispatch, useSelector } from "react-redux";
import { handleShowBanner, changeImage, setTimeMode, setIsMainBannerActive, setIsSoundListActive } from "../features/clock/clockSlice";
import Banner from "../components/Banner";
import newImage from '../utils/newImage';
import ClockBanner from '../components/ClockBanner';
import { handleStartFocus, handlePauseFocus, handleStopFocus } from '../features/clock/actionsHandlers';
import HomeFocusBtnContainer from '../components/HomeFocusBtnContainer';
import SoundListBanner from '../components/SoundListBanner';


const Home = () => {
    const { focusTime, showBanner, continueOrFinish, image, timeMode, isPomodoroActive, totalMinutesFocus, isSoundListActive } = useSelector((state) => state.clock)


    const isSmallScreen = useMediaQuery({ maxWidth: 640 }); // sm: 640px
    const dispatch = useDispatch()

    // * handlers
    function startFocus(operation) {
        handleStartFocus(dispatch, operation)
    }

    function pauseFocus() {
        handlePauseFocus(dispatch)
    }

    function stopFocus() {
        handleStopFocus(dispatch, totalMinutesFocus)
    }

    function setShowBanner() {
        dispatch(handleShowBanner())
    }

    async function handleChangeImage() {
        const newImg = await newImage()
        dispatch(changeImage(newImg))
    }

    function handleTimeMode() {
        dispatch(setTimeMode())
    }

    function handleFullScreen() {
        dispatch(setIsMainBannerActive())
    }

    function handleSoundListActive() {
        dispatch(setIsSoundListActive())
    }

    return (
        <>
            <div className={`grid gap-4 p-4 min-h-[100vh] bg-center bg-cover transition duration-300 ease-in-out ${showBanner || isSoundListActive ? 'opacity-90' : ''}`} style={{ backgroundImage: `url(${image})` }}>
                <div className="grid grid-cols-3 m-auto justify-items-start">
                    <button className="text-3xl md:text-4xl text-slate-200 animate-bounce hover:animate-none"><FaAngleDown /></button>
                    <button className="py-2 text-sm font-bold tracking-wider transition duration-500 ease-in-out rounded-full md:text-base bg-slate-700 text-slate-300 px-7 justify-self-center hover:bg-slate-300 hover:text-slate-700">{isSmallScreen ? 'Tarea...' : 'Seleccione una tarea...'}</button>
                </div>
                <div className="h-[50vh] self-center grid justify-center content-center gap-5">
                    <div className="flex items-center justify-center">
                        <Clock />
                    </div>
                    <div className="m-auto ">
                        <HomeFocusBtnContainer focusTime={focusTime} continueOrFinish={continueOrFinish} startFocus={startFocus} pauseFocus={pauseFocus} setShowBanner={setShowBanner} text={["Comenzar a Enfocarse", "Pausa", "Continuar", "Terminar"]} />
                    </div>
                </div>
                <div className="flex self-end justify-center gap-5">
                    <BtnHome icon={<GoScreenFull />} text="pantalla completa" func={handleFullScreen} />
                    <BtnHome icon={timeMode === "temporizador" ? <TiStopwatch /> : <CgSandClock />} text={`modo ${timeMode === "temporizador" ? "cronometro" : "temporizador"}`} func={handleTimeMode} disable={isPomodoroActive} />
                    <BtnHome icon={<ImMusic />} text="sonido de fondo" func={handleSoundListActive} />
                    <BtnHome icon={<GrImage />} text="Fondo de Pantalla" func={handleChangeImage} />
                </div>
            </div >
            {showBanner && <Banner setShowBanner={setShowBanner} stopFocus={stopFocus} textoPrincipal='¿Terminar este pomodoro?' textoSecundario='¿Esta seguro de parar este temporizador?' />
            }
            <SoundListBanner />
            <ClockBanner />
        </>

    )
}
export default Home