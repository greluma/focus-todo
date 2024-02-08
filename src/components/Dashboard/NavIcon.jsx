import PropTypes from 'prop-types';


export default function NavIcon({ icon, func }) {
    // * La función lo que hace es cambiar un valor en el estado para mostrar un banner dependiendo del reloj
    return (
        <button className='md:text-lg text-slate-600 transition-myTransition hover:scale-110' onClick={func}>
            {icon}
        </button>

    )
}

NavIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    func: PropTypes.func.isRequired
}

