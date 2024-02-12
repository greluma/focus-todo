import InfoTaskContainer from "./InfoTaskContainer"
import InfoTasks from "./InfoTasks"
import TasksListContainer from "./TasksListContainer";
import { useSelector } from "react-redux";
import { cantTiempo, getAllTasks, totalTareas } from "../../features/dashboard/dashboardUtils";
import AddTaskForm from "./AddTaskForm";

export const Tareas = () => {
    const { data } = useSelector((state) => state.dashboard)
    const allTasks = getAllTasks(data)

    return (
        <div className="grid gap-2">
            <div className="flex justify-between">
                <h2 className="self-center font-semibold tracking-widest">Tareas</h2>
                <InfoTaskContainer>
                    <InfoTasks data={totalTareas(allTasks)} description="Total de Tareas" />
                    <InfoTasks data={cantTiempo(allTasks)} description="Tiempo Transcurrido (mins)" />
                </InfoTaskContainer>
            </div>
            <AddTaskForm />

            <TasksListContainer list={allTasks} />
        </div>
    )
}