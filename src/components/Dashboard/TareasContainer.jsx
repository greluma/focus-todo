import PropTypes from 'prop-types';
import InfoTaskContainer from "./InfoTaskContainer"
import InfoTasks from "./InfoTasks"
import TasksListContainer from "./TasksListContainer";
import { cantTiempo, totalTareas } from "../../features/dashboard/dashboardUtils";
import AddTaskForm from "./AddTaskForm";


export const Tareas = ({ list, title, formExist, infoTasksTitles }) => {
    // const { data } = useSelector((state) => state.dashboard)
    // const allTasks = getAllTasks(data)

    return (
        <div className="grid gap-2">
            <div className="flex justify-between">
                <h2 className="self-center font-semibold tracking-widest">{title}</h2>
                <InfoTaskContainer>
                    <InfoTasks data={totalTareas(list)} description={infoTasksTitles[0]} />
                    <InfoTasks data={cantTiempo(list)} description={infoTasksTitles[1]} />
                </InfoTaskContainer>
            </div>
            {formExist && <AddTaskForm />}
            <TasksListContainer list={list} />
        </div>
    )
}

Tareas.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    formExist: PropTypes.bool.isRequired,
    infoTasksTitles: PropTypes.array.isRequired,
};