import { PropTypes } from "prop-types";

const InfoTasks = ({ data, description, color }) => {
    return (
        <div style={{ color: color }} className="grid place-items-center">
            <span className="font-mono text-xl font-bold md:text-2xl">{+ data}</span>
            <h3 className="text-xs tracking-wide text-slate-500" >{description}</h3>
        </div>
    )
}


InfoTasks.propTypes = {
    data: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default InfoTasks