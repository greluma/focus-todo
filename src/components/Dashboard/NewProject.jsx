import { useState } from "react";
import { Form } from "react-router-dom";
import AddButton from "./AddButton";
import { useDispatch } from "react-redux";
import { addProject } from "../../features/dashboard/dashboardSlice";
import { v4 as uniqueId } from "uuid";




const NewProject = () => {
    const [color, setColor] = useState("#E58AA1")
    function handleChangeColor(e) {
        setColor(e.target.value)
    }

    const dispatch = useDispatch()

    function handleSubmitNewProject(e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newProject = {
            projectName: formData.get("name"),
            id: uniqueId(),
            color: formData.get("color"),
            projectTime: 0,
            tasks: [],
        }
        form.reset()
        dispatch(addProject({ newProject }))
    }

    return (
        <div className="grid justify-center mt-2">
            <Form method="post" onSubmit={handleSubmitNewProject} >
                <div className="grid gap-4 p-8 border-2 rounded-lg shadow-md border-slate-600 bg-slate-100">
                    <div className="p-2">
                        <h2 className="text-base font-semibold tracking-wider text-center capitalize shadow-bottom md:text-lg">añadir nuevo proyecto</h2>
                    </div>
                    <div className="flex gap-2 px-2 py-1 rounded-lg bg-slate-200">
                        <label htmlFor="name" className="font-semibold tracking-wide ">Nombre</label>
                        <input type="text" name="name" id="name" className="text-center rounded outline-slate-300" placeholder="Ej. Idiomas" />
                    </div>
                    <div className="grid gap-1 p-2 border-2 rounded-lg justify-self-center border-slate-300 place-items-center">
                        <h3 className="text-sm font-semibold tracking-wide">Escoge un Color</h3>
                        <input type="color" defaultValue={color} onChange={handleChangeColor} name="color" />
                    </div>
                    <div className="flex justify-end">
                        <AddButton title={"Crear"} color={color} />
                    </div>
                </div>
            </Form>
        </div>
    )
}
export default NewProject