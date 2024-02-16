import { FaCircleUser, FaAngleDown } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { CgInfo } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import NavIcon from "./NavIcon";
import AngleIcon from "../AngleIcon";


export default function Navbar() {
    return (
        <header className="relative z-20 h-full shadow-bottom bg-slate-100">
            <div className="flex justify-between h-full mx-8 md:mx-12">
                <AngleIcon icon={<FaAngleDown />} to="/" color='text-slate-700' />
                <div className="flex gap-2 p-2">
                    <FaCircleUser className="self-center text-xl md:text-2xl text-slate-600" />
                    {/* TODO: Botón o Link de registro  */}
                    <button className="text-[0.8rem] md:text-base tracking-wide text-red-500 transition-myTransition hover:text-red-800 ">Entrar |  Registrarse</button>
                </div>



                <div className="flex gap-2 p-2">
                    <NavIcon icon={<ImStatsBars />} func={() => console.log("Estadísticas")} />
                    <NavIcon icon={<IoNotifications />} func={() => console.log("Notificaciones")} />
                    <NavIcon icon={<CgInfo />} func={() => console.log("Información")} />
                </div>
            </div>
        </header>
    )
}