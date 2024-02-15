import { PropTypes } from "prop-types";

export default function AddButton({ title, color }) {
    return (
        <button type="submit" className={`cursor-pointer transition-all text-white px-3 py-1  rounded-lg
border-slate-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-sm `} style={{ backgroundColor: color }}>
            {title}
        </button>
    )
}

AddButton.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

