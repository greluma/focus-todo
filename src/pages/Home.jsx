import Clock from "../components/Clock"
import backgroundImage from '../assets/main-background.jpg';
import { FaAngleDown } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { ImMusic } from "react-icons/im";
import { BsClockHistory } from "react-icons/bs";
import BtnHome from "../components/BtnHome";

// TODO: Que la imagen de fondo cambie cada vez que acabe un Pomodoro

const Home = () => {
    return (
        <div className=" p-5 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="grid grid-cols-3 justify-items-start m-auto">
                <button className="text-3xl text-slate-200"><FaAngleDown /></button>
                <button className="bg-slate-700 text-slate-300 font-bold tracking-wider py-2 px-7 rounded-full justify-self-center">Seleccione una tarea...</button>
            </div>
            <div className="h-[70vh] grid justify-center content-center grid-rows-5">
                <div className="row-span-4 flex items-center justify-center">
                    <Clock />
                </div>
                <div className="mt-4 row-span-1 m-auto">
                    <button className=" bg-slate-300 font-bold tracking-wider  py-2 px-7 rounded-full text-blue-950 flex items-center justify-center ">
                        <FaPlay className="mr-2" /> Comenzar a Enfocarse
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <BtnHome icon={<BsClockHistory />} text="pantalla completa" />
                <BtnHome icon={<CgSandClock />} text="modo temporizador" />
                <BtnHome icon={<ImMusic />} text="sonido de fondo" />
            </div>
        </div>
    )
}
export default Home