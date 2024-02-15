import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";

export default function ProjectsContainer() {
    const { data } = useSelector(state => state.dashboard);

    {/* TODO: Me sale este error cada vez que añado un nuevo proyecto y se actualiza la lista: VM16404:3 Warning: Cannot update a component (`LinksContainer`) while rendering a different component (`NewProject`). To locate the bad setState() call inside `NewProject`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render */ }

    return <ul className="grid justify-center gap-2 pb-1 mt-2 shadow-bottom">
        {data.map((project) => {
            const { id, projectName, color } = project;
            return (
                <NavLinks key={id} to={`/dashboard/proyectos/${id}`} text={projectName} color={color} />

            )
        })}
    </ul>

}