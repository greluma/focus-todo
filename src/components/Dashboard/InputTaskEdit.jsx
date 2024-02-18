import { PropTypes } from "prop-types";



export default function InputTaskEdit({ id, type, title, text }) {


    function adjustHeight(e) {
        const textarea = e.target;
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight) + "px";
    }

    const estilos = "p-1 text-center rounded-lg outline-slate-400";

    return (
        <div className="flex justify-between gap-3 px-2 py-1 text-sm tracking-wide md:text-base rounded-xl bg-slate-300 ">
            <label htmlFor={id} className="self-start font-semibold">{title}</label>
            {type === "text" ? <input type="text" id={id} defaultValue={text} className={estilos} name={id} /> : <textarea className={estilos} name={id} id={id} defaultValue={text} onInput={adjustHeight}>
            </textarea>}
        </div>
    )
}

InputTaskEdit.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    type: PropTypes.string.isRequired
}