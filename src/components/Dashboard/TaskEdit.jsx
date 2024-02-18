import { useDispatch, useSelector } from "react-redux"
import { Form, useParams } from "react-router-dom"
import { findTaskByID } from "../../features/dashboard/dashboardUtils"
import InputTaskEdit from "./InputTaskEdit"
import { editTask } from "../../features/dashboard/dashboardSlice"

const TaskEdit = () => {
    const { data } = useSelector(state => state.dashboard)
    const { taskId, projectId } = useParams()
    const { taskName, taskDescription, complete } = findTaskByID(data, taskId)
    const dispatch = useDispatch()

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const editedTask = {
            taskName: formData.get("name"),
            taskDescription: formData.get("description"),
            complete: formData.get("complete") == "on"
        }
        dispatch(editTask({ projectId, taskId, editedTask }))
    }

    return (
        <div className="grid justify-center p-2">
            <Form onSubmit={handleSubmitForm} method="POST" className="grid gap-4 p-4 border-2 shadow-lg bg-slate-100 md:gap-6 border-slate-600 rounded-xl">
                <div className="flex justify-center">
                    <h2 className="text-lg font-semibold tracking-wide w-fit md:text-xl shadow-bottom">Edición de Tarea</h2>
                </div>
                <InputTaskEdit id="name" type="text" title="Nombre" text={taskName} />
                <InputTaskEdit id="description" type="textarea" title="Descripción" text={taskDescription} />
                <div className="flex justify-center gap-4 text-sm font-semibold tracking-wide md:gap-8 md:text-base text-slate-600 ">
                    <div className="flex items-center gap-1">
                        <label className="text-sm" htmlFor="complete">Check:</label>
                        <div className="relative flex ">
                            <input defaultChecked={complete} name="complete" id="complete" type="checkbox" className="w-12 h-6 border-2 rounded-full appearance-none cursor-pointer border-slate-600 peer checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
                            <span className="absolute block w-4 h-4 transition-all duration-200 bg-gray-400 rounded-full pointer-events-none left-1 top-1 peer-checked:left-7 peer-checked:bg-gray-900"></span>
                        </div>
                    </div>

                    <button type="submit" className="px-2 py-1 border-2 rounded-full border-slate-600 hover:scale-105 transition-myTransition">Guardar</button>
                </div>
            </Form>
        </div>
    )
}
export default TaskEdit