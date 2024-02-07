import { Form } from "react-router-dom"
import { FiSearch } from "react-icons/fi";

export default function Sidebar() {
    return (
        <aside className="w-[30vw] bg-slate-100 p-2 z-0 shadow-right h-full grid">
            <Form className="flex gap-2">
                <FiSearch className="self-center text-slate-600" />
                <input type="text" placeholder="Buscar" className="w-[90%] rounded-lg text-center tracking-wide" />
            </Form>
            <ul>
                <li>
                    sfsbfs
                </li>
                <li>
                    sfsbfs
                </li>
                <li>
                    sfsbfs
                </li>
                <li>
                    sfsbfs
                </li>
            </ul>
            <div>Nuevo Proyecto</div>
        </aside>
    )
}