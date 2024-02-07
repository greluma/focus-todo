import { FaCircleUser } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { CgInfo } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import NavIcon from "./NavIcon";

export default function Navbar() {
    return (
        <header className="relative z-20 flex justify-between h-full shadow-bottom bg-slate-100">
            <div className="flex items-center gap-2 p-2">
                {/* TODO: Botón o Link de registro  */}
                <FaCircleUser className="text-xl text-slate-600" />
                <h3 className="text-sm tracking-wide text-red-500 ">Entrar |  Registrarse</h3>
            </div>
            <div className="flex gap-2 p-2">
                <NavIcon icon={<ImStatsBars />} func={() => console.log("Estadísticas")} />
                <NavIcon icon={<IoNotifications />} func={() => console.log("Notificaciones")} />
                <NavIcon icon={<CgInfo />} func={() => console.log("Información")} />
            </div>
        </header>
    )
}