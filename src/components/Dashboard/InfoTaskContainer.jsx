import { PropTypes } from "prop-types";

const InfoTaskContainer = ({ children }) => {
    return (
        <div className="flex gap-4 bg-slate-200 py-2 px-4 rounded-xl">
            {children}
        </div>

    )
}

InfoTaskContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default InfoTaskContainer