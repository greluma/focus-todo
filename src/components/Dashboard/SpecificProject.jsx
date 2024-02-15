import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TareasContainer } from "./TareasContainer";

export default function SpecificProject() {
    const { data } = useSelector(state => state.dashboard);
    const { projectId } = useParams();
    const project = data.find(project => project.id === projectId);
    const { tasks, projectName } = project;

    const tareasProps = { list: tasks, title: projectName, formExist: true, infoTasksTitles: ["Total de Tareas", "Tiempo Transcurrido (mins)"], annadir: project.projectName, select: { isSelect: false, selectValue: projectName } }
    return (
        <TareasContainer {...tareasProps} />
    )
}