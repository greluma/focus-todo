import { useSelector } from "react-redux";
import { getAllTasks, ordenarTareas } from "../../features/dashboard/dashboardUtils";
import { TareasContainer } from "./TareasContainer";

export const Tareas = () => {
    const { data } = useSelector((state) => state.dashboard)
    const allTasks = ordenarTareas(getAllTasks(data))

    const tareasProps = { list: allTasks, title: "Tareas", formExist: true, infoTasksTitles: ["Total de Tareas", "Tiempo Transcurrido (mins)"], annadir: "Tareas", select: { isSelect: true } }
    return (
        <TareasContainer {...tareasProps} />
    )
}
