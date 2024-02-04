import PropTypes from 'prop-types';
import { IoMdClock } from "react-icons/io";

const Banner = ({ setShowBanner, stopFocus, textoPrincipal, textoSecundario }) => {
    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center animate-fadeIn ">
            <div className="grid grid-cols-5 gap-4 p-4 text-center rounded shadow-lg bg-slate-200">
                <div className="self-center col-span-1 text-6xl text-red-800 place-self-center">{<IoMdClock />}</div>
                <div className='col-span-4'>
                    <div className="flex gap-4">
                        <div>
                            <h2 className="mb-2 text-sm font-bold tracking-wide sm:text-base ">{textoPrincipal}</h2>
                            <h2 className="text-xs font-medium tracking-wide sm:text-sm">{textoSecundario}</h2>
                        </div>
                    </div>
                    <div>
                        <button onClick={setShowBanner} className="px-4 py-2 m-2 text-xs font-bold transition duration-500 ease-in-out border rounded text-slate-600 border-slate-500 hover:text-slate-800 sm:text-sm">
                            Cancelar
                        </button>
                        <button onClick={() => {
                            setShowBanner();
                            stopFocus()
                        }} className="px-4 py-2 m-2 text-xs font-bold text-white transition duration-500 ease-in-out bg-red-500 rounded hover:bg-red-700 sm:text-sm">
                            Terminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Banner.propTypes = {
    textoPrincipal: PropTypes.string.isRequired,
    textoSecundario: PropTypes.string.isRequired,
    setShowBanner: PropTypes.func,
    stopFocus: PropTypes.func,
};
export default Banner