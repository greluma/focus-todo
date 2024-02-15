import { Form, Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { BsFolderPlus } from "react-icons/bs";
import LinksContainer from "./LinksContainer";
import ProjectsContainer from "./ProjectsContainer";

export default function Sidebar() {
    return (
        <aside className="z-0 p-2 w-fit bg-slate-100 shadow-right" style={{ display: 'grid', gridTemplateRows: '1fr 11fr 1fr' }}>
            <Form className="flex self-center gap-1 px-2 pb-1 shadow-bottom">
                <FiSearch className="self-center text-slate-600" />
                <input type="text" placeholder="Buscar" className="w-[90%] outline-slate-300 rounded-lg text-center tracking-wide text-sm md:text-base" />
            </Form>
            <nav className="m-3 ">
                <LinksContainer />
                <ProjectsContainer />
            </nav>
            <div className="flex justify-center shadow-top" >
                <Link to={"/dashboard/proyectos"} className="flex self-center gap-2 p-1 text-sm tracking-wide text-red-500 capitalize transition-myTransition hover:text-red-600"> <span className="self-center"><BsFolderPlus /></span>nuevo proyecto</Link>
            </div>
        </aside>
    )
}