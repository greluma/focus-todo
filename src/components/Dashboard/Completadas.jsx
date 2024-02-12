import { useSelector } from "react-redux";
import { getAllTasks } from "../../features/dashboard/dashboardUtils";
import { TareasContainer } from "./TareasContainer";

const Completadas = () => {
    const { data } = useSelector((state) => state.dashboard)
    const allTasks = getAllTasks(data)
    const incompletas = allTasks.filter((task) => !task.complete)
    const tareasProps = { list: incompletas, title: "Completadas", formExist: false, infoTasksTitles: ["Total", "Tiempo Transcurrido (mins)"] }
    return (
        <TareasContainer {...tareasProps} />
    )
}

export default Completadas;