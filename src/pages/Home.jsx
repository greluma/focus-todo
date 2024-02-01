import { useMediaQuery } from 'react-responsive';
// icons
import { FaAngleDown } from "react-icons/fa6";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { GrImage } from "react-icons/gr";
import { ImMusic } from "react-icons/im";
import { BsClockHistory } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { TiStopwatch } from "react-icons/ti";
// components
import Clock from "../components/Clock"
import BtnHome from "../components/BtnHome";
import HomeFocusBtn from "../components/HomeFocusBtn";
// redux
import { useDispatch, useSelector } from "react-redux";
import { changeFocusTime, decrement, resetTimer, newIntervalId, clearIntervalHandler, handleShowBanner, setContinueOrFinish, changeImage, increment, setTimeMode, setIsPomodoroActive } from "../features/clock/clockSlice";
import Banner from "../components/Banner";
import newImage from '../utils/newImage';
import { callFinishToast } from '../utils/callToast';

const Home = () => {
    const { focusTime, showBanner, continueOrFinish, image, timeMode, isPomodoroActive, totalMinutesFocus } = useSelector((state) => state.clock)

    const isSmallScreen = useMediaQuery({ maxWidth: 640 }); // sm: 640px
    const dispatch = useDispatch()

    function startFocus(operation) {
        dispatch(setContinueOrFinish(false))
        dispatch(changeFocusTime(true));
        dispatch(newIntervalId(setInterval(() => {
            switch (operation) {
                case "increment":
                    dispatch(increment({ unit: "seconds", time: 1 }))
                    break;
                case "decrement":
                    dispatch(decrement({ unit: "seconds", time: 1 }))
                    break;
                default:
                    break;
            }
        }, 1000)))
        dispatch(setIsPomodoroActive(true))
    }

    function pauseFocus() {
        dispatch(changeFocusTime(false));
        dispatch(clearIntervalHandler())
        dispatch(setContinueOrFinish(true))
    }

    function stopFocus() {
        dispatch(changeFocusTime(false));
        dispatch(clearIntervalHandler())
        dispatch(setContinueOrFinish(false))
        dispatch(resetTimer())
        callFinishToast(totalMinutesFocus)
        dispatch(setIsPomodoroActive(false))
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

    return (
        <>
            <div className={`grid gap-4 p-4 min-h-[100vh] bg-center bg-cover transition duration-300 ease-in-out ${showBanner ? 'opacity-90' : ''}`} style={{ backgroundImage: `url(${image})` }}>
                <div className="grid grid-cols-3 m-auto justify-items-start">
                    <button className="text-3xl md:text-4xl text-slate-200 animate-bounce hover:animate-none"><FaAngleDown /></button>
                    <button className="py-2 text-sm font-bold tracking-wider transition duration-500 ease-in-out rounded-full md:text-base bg-slate-700 text-slate-300 px-7 justify-self-center hover:bg-slate-300 hover:text-slate-700">{isSmallScreen ? 'Tarea...' : 'Seleccione una tarea...'}</button>
                </div>
                <div className="h-[50vh] self-center grid justify-center content-center gap-5">
                    <div className="flex items-center justify-center">
                        <Clock />
                    </div>
                    <div className="m-auto ">
                        <HomeFocusBtn focusTime={focusTime} continueOrFinish={continueOrFinish} icon={<FaPlay />} text="Comenzar a Enfocarse" func={startFocus} colorIcon={"limeGreen"} />
                        <HomeFocusBtn focusTime={!focusTime} icon={<FaPause />} text="Pausa" func={pauseFocus} colorIcon={"indianRed"} />
                        {continueOrFinish && <div className="flex gap-4"><HomeFocusBtn focusTime={focusTime} icon={<CiPlay1 />} text="Continuar" colorIcon={"limeGreen"} func={startFocus} /><HomeFocusBtn focusTime={focusTime} icon={<FaStop />} text="Terminar" func={setShowBanner} colorIcon={"indianRed"} /></div>}
                    </div>
                </div>
                <div className="flex self-end justify-center gap-5">
                    <BtnHome icon={<BsClockHistory />} text="pantalla completa" />
                    <BtnHome icon={timeMode === "temporizador" ? <TiStopwatch /> : <CgSandClock />} text={`modo ${timeMode === "temporizador" ? "cronometro" : "temporizador"}`} func={handleTimeMode} disable={isPomodoroActive} />
                    <BtnHome icon={<ImMusic />} text="sonido de fondo" />
                    <BtnHome icon={<GrImage />} text="Fondo de Pantalla" func={handleChangeImage} />
                </div>
            </div >
            {showBanner && <Banner setShowBanner={setShowBanner} stopFocus={stopFocus} textoPrincipal='¿Terminar este pomodoro?' textoSecundario='¿Esta seguro de parar este temporizador?' />
            }
        </>

    )
}
export default Home