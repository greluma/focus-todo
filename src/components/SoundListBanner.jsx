import { useDispatch, useSelector } from "react-redux"
import { soundList } from "../utils/sounds"
import { setIsSoundListActive } from "../features/clock/clockSlice"


const classBtn = "px-4 py-2 m-2 text-xs font-bold transition duration-500 ease-in-out border rounded text-slate-400 border-slate-400 hover:text-slate-100 hover:border-slate-100 sm:text-sm uppercase tracking-widest"
const SoundListBanner = () => {

    const { isSoundListActive } = useSelector((state) => state.clock)
    const dispatch = useDispatch()

    return (
        <div className={`fixed ${!isSoundListActive && "hidden"} inset-0 z-10 animate-fadeIn w-screen h-screen text-slate-200 bg-transparent `}>
            <div className="fixed transform -translate-x-1/2 -translate-y-1/2  bg-slate-950 left-1/2 top-1/2 rounded-xl">
                <div className='grid gap-4 p-4 md:p-6'>
                    <h2 className="text-lg tracking-wide text-center rounded md:text-2xl">Sonido de Fondo</h2>
                    <form className="grid gap-4">
                        <div className="flex justify-around mb-4" >
                            <label htmlFor="volumen">Volumen</label>
                            <input type="range" id="volumen" name="volumen" value="100" />
                        </div>
                        <ul className="grid justify-around gap-2">
                            <li className="flex justify-between gap-7">
                                <label htmlFor={0}>Ninguna</label>
                                <input type="radio" id={0} name="sound" value={0} />
                            </li>
                            {soundList.map((sound) => {
                                return (
                                    <li key={sound.id} className="flex justify-between gap-7">
                                        <label htmlFor={sound.id}>{sound.name}</label>
                                        <input className="text-end" type="radio" id={sound.id} name="sound" value={sound.id} />
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="h-0.5 -mx-4  md:-mx-6 bg-slate-700"></div>
                        <div className="flex justify-center">
                            <button type="submit" className={classBtn}>Determinar</button>
                            <button onClick={() => {
                                dispatch(setIsSoundListActive())
                            }} className={classBtn}>Salir</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default SoundListBanner