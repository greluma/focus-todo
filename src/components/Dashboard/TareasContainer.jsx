import PropTypes from 'prop-types';
import InfoTaskContainer from "./InfoTaskContainer"
import InfoTasks from "./InfoTasks"
import TasksListContainer from "./TasksListContainer";
import { cantTiempo, totalTareas } from "../../features/dashboard/dashboardUtils";
import AddTaskForm from "./AddTaskForm";

// TODO: Edita tu proyecto aquí
// 1 - Cambia el h2 para que sea un input y se pueda editar el nombre del proyecto
// 2 - Pon un botón abajo para eliminar el proyecto: antes de eliminarlo, muestra un modal de confirmación con tres opciones, cancelar, eliminar tareas o mantenerlas y guardarlas en sin proyecto
// 3 - Crea un input color para cambiar el color del proyecto

export const TareasContainer = ({ list, title, formExist, infoTasksTitles, annadir, select, color = "#4b543b" }) => {

    return (
        <div style={{ "borderColor": color }} className="grid gap-3 p-4 border shadow-xl md:gap-4 rounded-xl">
            <div className="flex justify-between">
                <h2 style={{ color: color }} className="self-center font-semibold tracking-widest shadow-bottom">{title}</h2>
                <InfoTaskContainer>
                    <InfoTasks data={totalTareas(list)} description={infoTasksTitles[0]} color={color} />
                    <InfoTasks data={cantTiempo(list)} description={infoTasksTitles[1]} color={color} />
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
    color: PropTypes.string,
};