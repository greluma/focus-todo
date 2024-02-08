import PropTypes from 'prop-types';
import { NavLink, useMatch } from "react-router-dom"

export default function NavLinks({ to, icon, text }) {
    const match = useMatch(to);
    return (
        <li>
            <NavLink to={to}>
                <div className={`${match ? 'bg-slate-300 text-slate-700' : ''} flex gap-2 text-sm md:text-base px-2 py-1 rounded-full`}>
                    <span className='self-center'>{icon}</span>
                    <h2>{text}</h2>
                </div>
            </NavLink>
        </li>
    )
}

NavLinks.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired
}