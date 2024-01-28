import PropTypes from 'prop-types';
import { IoMdClock } from "react-icons/io";

const Banner = ({ setShowBanner, stopFocus }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center transition duration-300 ease-in-out transform scale-2 animate-fadeIn">
            <div className="p-4 text-center rounded shadow-lg bg-slate-200">
                <div className="flex gap-4 mb-6">
                    <div className="text-6xl text-red-800"><IoMdClock /></div>
                    <div>
                        <h2 className="mb-2 text-base font-bold tracking-wide ">¿Terminar este pomodoro?</h2>
                        <h2 className="text-sm font-medium tracking-wide">¿Esta seguro de parar este temporizador?</h2>
                    </div>
                </div>
                <div>
                    <button onClick={setShowBanner} className="px-4 py-2 m-2 font-bold transition duration-500 ease-in-out border rounded text-slate-600 border-slate-500 hover:text-slate-800">
                        Cancelar
                    </button>
                    <button onClick={() => {
                        setShowBanner();
                        stopFocus()
                    }} className="px-4 py-2 m-2 font-bold text-white transition duration-500 ease-in-out bg-red-500 rounded hover:bg-red-700">
                        Terminar
                    </button>
                </div>
            </div>
        </div>
    )
}

Banner.propTypes = {
    setShowBanner: PropTypes.func.isRequired,
    stopFocus: PropTypes.func.isRequired,
};
export default Banner