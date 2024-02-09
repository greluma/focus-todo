import { PropTypes } from "prop-types";

const InfoTasks = ({ data, description }) => {
    return (
        <div className="grid place-items-center">
            <span className="font-mono text-xl md:text-2xl font-bold text-red-500">{data}</span>
            <h3 className="text-xs tracking-wide text-slate-500" >{description}</h3>
        </div>
    )
}


InfoTasks.propTypes = {
    data: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default InfoTasks