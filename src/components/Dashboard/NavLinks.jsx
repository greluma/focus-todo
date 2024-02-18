import PropTypes from 'prop-types';
import { NavLink, useNavigate, useMatch } from "react-router-dom"
import { MdEdit } from "react-icons/md";

export default function NavLinks({ id, to, icon, text, color, edit }) {
    const match = useMatch(to);
    const navigate = useNavigate();

    return (
        <li style={{ color: color }} className='flex justify-between'>
            <NavLink to={to}>
                <div className={`${match ? "bg-slate-300 text-slate-700" : ''} flex gap-2 text-sm md:text-base px-2 py-1 rounded-full`}>
                    <span className='self-center'>{icon}</span>
                    <h2>{text}</h2>
                </div>
            </NavLink>
            {edit && <button onClick={() => {
                navigate(`/dashboard/proyectos/${id}/edit`)
            }} className='text-lg'>
                <MdEdit />
            </button>}
        </li>
    )
}

NavLinks.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
    color: PropTypes.string,
    edit: PropTypes.bool,
    id: PropTypes.string,
}