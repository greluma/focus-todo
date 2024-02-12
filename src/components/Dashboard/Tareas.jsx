import { Form } from "react-router-dom"
import InfoTaskContainer from "./InfoTaskContainer"
import InfoTasks from "./InfoTasks"
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import ItemsListContainer from "./ItemsListContainer";

export const Tareas = () => {
    const [isFocus, setIsFocus] = useState(false)
    const handleFocus = (newValor) => {
        setIsFocus(newValor)
    }

    return (
        <div className="grid gap-2">
            <div className="flex justify-between">
                <h2 className="self-center font-semibold tracking-widest">Tareas</h2>
                <InfoTaskContainer>
                    <InfoTasks data={0} description="Tareas Pendientes" />
                    <InfoTasks data={0} description="Tiempo Transcurrido (mins)" />
                </InfoTaskContainer>
            </div>
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
            <ItemsListContainer list={[1, 2, 2]} />
        </div>
    )
}