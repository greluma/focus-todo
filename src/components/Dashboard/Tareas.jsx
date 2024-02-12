import { useSelector } from "react-redux";
import { getAllTasks } from "../../features/dashboard/dashboardUtils";
import { TareasContainer } from "./TareasContainer";

export const Tareas = () => {
    const { data } = useSelector((state) => state.dashboard)
    const allTasks = getAllTasks(data)
    const tareasProps = { list: allTasks, title: "Tareas", formExist: true, infoTasksTitles: ["Total de Tareas", "Tiempo Transcurrido (mins)"] }
    return (
        <TareasContainer {...tareasProps} />
    )
}
