import { Form } from "react-router-dom"
import InfoTaskContainer from "./InfoTaskContainer"
import InfoTasks from "./InfoTasks"
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export const Tareas = () => {
    const [isFocus, setIsFocus] = useState(false)
    const handleFocus = (newValor) => {
        setIsFocus(newValor)
    }

    return (
        <div className="grid gap-2">
            <div className="flex justify-between">
                <h2 className="font-semibold tracking-widest self-center">Tareas</h2>
                <InfoTaskContainer>
                    <InfoTasks data={0} description="Tareas Pendientes" />
                    <InfoTasks data={0} description="Tiempo Transcurrido (mins)" />
                </InfoTaskContainer>
            </div>
            <div className={`bg-slate-200 py-2 px-3 rounded-xl flex transition-myTransition ${isFocus ? "shadow-md" : "shadow-none"

                }`}>
                <Form>
                    <div className="flex gap-1">
                        <span className="self-center text-slate-400 text-xs" ><FaPlus /></span>
                        <input onFocus={() => {
                            handleFocus(true)

                        }} onBlur={() => {
                            handleFocus(false)
                        }} type="text" placeholder="Añadir en Tareas [Enter] " className="w-full bg-slate-200 text-sm outline-none text-slate-700" />
                    </div>
                </Form>
            </div>

            <div>Lista de tareas</div>
        </div>
    )
}