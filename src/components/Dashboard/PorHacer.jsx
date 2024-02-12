import { useSelector } from "react-redux";
import { getAllTasks } from "../../features/dashboard/dashboardUtils";
import { TareasContainer } from "./TareasContainer";

const PorHacer = () => {
    const { data } = useSelector((state) => state.dashboard)
    const allTasks = getAllTasks(data)
    const incompletas = allTasks.filter((task) => task.complete)
    const tareasProps = { list: incompletas, title: "Por Hacer", formExist: false, infoTasksTitles: ["Total", "Tiempo Transcurrido (mins)"] }
    return (
        <TareasContainer {...tareasProps} />
    )
}

export default PorHacer;