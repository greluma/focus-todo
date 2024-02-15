import PropTypes from 'prop-types';
import InfoTaskContainer from "./InfoTaskContainer"
import InfoTasks from "./InfoTasks"
import TasksListContainer from "./TasksListContainer";
import { cantTiempo, totalTareas } from "../../features/dashboard/dashboardUtils";
import AddTaskForm from "./AddTaskForm";


export const TareasContainer = ({ list, title, formExist, infoTasksTitles, annadir, select }) => {
    return (
        <div className="grid gap-2">
            <div className="flex justify-between">
                <h2 className="self-center font-semibold tracking-widest">{title}</h2>
                <InfoTaskContainer>
                    <InfoTasks data={totalTareas(list)} description={infoTasksTitles[0]} />
                    <InfoTasks data={cantTiempo(list)} description={infoTasksTitles[1]} />
                </InfoTaskContainer>
            </div>
            {formExist && <AddTaskForm annadir={annadir} select={select} />}
            <TasksListContainer list={list} />
        </div>
    )
}

TareasContainer.propTypes = {
    annadir: PropTypes.string,
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    formExist: PropTypes.bool.isRequired,
    infoTasksTitles: PropTypes.array.isRequired,
    select: PropTypes.object,
};