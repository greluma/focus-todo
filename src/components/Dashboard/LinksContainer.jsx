import { FaTasks } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import NavLinks from "./NavLinks";

const mainLinks = [
    {
        to: "/dashboard/tareas",
        icon: <FaTasks />,
        text: "Tareas"
    },
    {
        to: "/dashboard/todo",
        icon: <BiTask />,
        text: "Por hacer"
    },
    {
        to: "/dashboard/completadas",
        icon: <MdOutlineTaskAlt />,
        text: "Completadas"
    }
]

export default function LinksContainer() {
    return (
        <ul className="grid self-start gap-2 pb-1 shadow-bottom">
            {mainLinks.map((link) => {
                const { to, icon, text } = link;
                return (
                    <NavLinks key={text} to={to} icon={icon} text={text} />
                )
            })}

        </ul>
    )
}