import PropTypes from 'prop-types';

import { useState } from "react"
import { Form } from "react-router-dom"
import { FaPlus } from "react-icons/fa6";
import { v4 as uniqueId } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../features/dashboard/dashboardSlice";

const AddTaskForm = ({ annadir, select }) => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.dashboard);
    const [isFocus, setIsFocus] = useState(false)
    const handleFocus = (newValor) => {
        setIsFocus(newValor)
    }
    const { isSelect, selectValue } = select
    // const navigate = useNavigate()

    function addFormAction(e) {
        const formData = new FormData(e.target);
        const taskName = formData.get("name");
        const project = formData.get("projects");
        const newTask = { id: uniqueId(), taskName, taskDescription: "", complete: false, taskTime: 0 }
        dispatch(addTask({ newTask, project }))
        e.target.reset();
        // * El redirect no funciona
        // return redirect("/");
        // * El navigate tampoco
        // navigate("/")
        // TODO: Que navegue hasta la ruta de editar la tarea recién creada
    }

    return (
        <div className={`bg-slate-200 py-2 px-3 rounded-xl flex transition-myTransition ${isFocus ? "shadow-md" : "shadow-none"
            }`}>
            <Form id="create-task" onSubmit={addFormAction} className="w-full">
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <span className="self-center text-xs text-slate-400" ><FaPlus /></span>
                        <input onFocus={() => {
                            handleFocus(true)

                        }} onBlur={() => {
                            handleFocus(false)
                        }} type="text" placeholder={`${annadir} [Enter] `} className="text-sm outline-none w-max bg-slate-200 text-slate-700" name="name" />
                    </div>
                    <select name="projects" id="projects" onFocus={() => {
                        handleFocus(true)
                    }} onBlur={() => {
                        handleFocus(false)
                    }} className={`${isFocus ? "shadow-md" : "shadow-none"
                        } outline-slate-300 rounded-md text-xs bg-slate-300 p-1 tracking-wide font-semibold ${!isSelect ? "hidden" : ""} `}>
                        {!isSelect ? <option value={selectValue}>{selectValue}</option> :
                            data.map((project) => {
                                return (
                                    <option key={project.id} value={project.projectName}>{project.projectName}</option>
                                )
                            })
                        }

                    </select>
                </div>
            </Form>
        </div>
    )
}


AddTaskForm.propTypes = {
    annadir: PropTypes.string.isRequired,
    select: PropTypes.object.isRequired,
};


export default AddTaskForm