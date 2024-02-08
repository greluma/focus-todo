import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export default function AngleIcon({ icon, to, color, disable }) {
    return (
        <Link to={`${disable ? "/" : to}`} className={` ${color} ${to === "/" ? "h-full flex text-2xl md:text-3xl  " : "text-3xl md:text-4xl self-end"} ${disable && "pointer-events-none animate-none text-slate-300"} animate-pulse hover:animate-none transition-myTransition`}> <div className="self-center">{icon}</div> </Link>
    )
}

// props

AngleIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    to: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    disable: PropTypes.bool
}