import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";

export default function ProjectsContainer() {
    const { data } = useSelector(state => state.dashboard);

    return <ul className="grid justify-center gap-2 pb-1 mt-2 shadow-bottom">
        {data.map((project) => {
            const { id, projectName, color, tasks } = project;
            if (projectName === "Sin Proyecto" && tasks.length === 0) return null;
            return (
                <NavLinks key={id} to={`/dashboard/proyectos/${id}`} text={projectName} color={color} edit={true} id={id} />

            )
        })}
    </ul>

}