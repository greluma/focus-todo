import { useState } from "react"
import { Form } from "react-router-dom"
import { FaPlus } from "react-icons/fa6";


const AddTaskForm = () => {
    const [isFocus, setIsFocus] = useState(false)
    const handleFocus = (newValor) => {
        setIsFocus(newValor)
    }
    return (
        <div className={`bg-slate-200 py-2 px-3 rounded-xl flex transition-myTransition ${isFocus ? "shadow-md" : "shadow-none"
            }`}>
            <Form>
                <div className="flex gap-1">
                    <span className="self-center text-xs text-slate-400" ><FaPlus /></span>
                    <input onFocus={() => {
                        handleFocus(true)

                    }} onBlur={() => {
                        handleFocus(false)
                    }} type="text" placeholder="Añadir en Tareas [Enter] " className="w-full text-sm outline-none bg-slate-200 text-slate-700" />
                </div>
            </Form>
        </div>
    )
}
export default AddTaskForm