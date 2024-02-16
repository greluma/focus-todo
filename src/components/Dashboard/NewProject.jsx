import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import AddButton from "./AddButton";
import { useDispatch } from "react-redux";
import { addProject } from "../../features/dashboard/dashboardSlice";



const NewProject = () => {
    const [color, setColor] = useState("#E58AA1")
    function handleChangeColor(e) {
        setColor(e.target.value)
    }
    const dispatch = useDispatch()
    const data = useActionData()
    if (data) {
        dispatch(addProject({ newProject: data }))
    }

    return (
        <div className="grid justify-center mt-2">
            <Form method="post" >
                <div className="grid gap-4 p-8 rounded-lg shadow-md bg-slate-200">
                    <div className="p-2">
                        <h2 className="text-sm font-semibold tracking-wider text-center capitalize shadow-bottom md:text-base">añadir nuevo proyecto</h2>
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor="name" className="text-sm tracking-wide">Nombre</label>
                        <input type="text" name="name" id="name" className="text-xs text-center rounded bg-slate-100 outline-slate-300" placeholder="Focus TODO" />
                    </div>
                    <div className="grid gap-1 p-2 border rounded-lg justify-self-center border-slate-300 place-items-center">
                        <h3 className="text-sm font-medium tracking-wide">Escoge un Color</h3>
                        <input type="color" className="border-2 rounded-full color-i bg-slate-400 border-slate-400" style={{ backgroundColor: color }} defaultValue={color} onChange={handleChangeColor} name="color" />
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