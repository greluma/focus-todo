import { useSelector } from "react-redux"
import { searchSound, soundList } from "../utils/sounds"
import SoundBannerBtn from "./SoundBannerBtn"
import { setIsSoundListActive, setTheSound } from "../features/clock/clockSlice"


function defaultAction(e, dispatch) {
    e.preventDefault()
    dispatch(setIsSoundListActive())

}
function btnSalir(e, dispatch, theSound) {
    defaultAction(e, dispatch)
    const srcSelectedAudio = soundList.find((sound) => sound.sound == theSound);
    const list = Array.from(document.querySelectorAll('.list-element'))
    list.forEach((element) => {
        if (list.indexOf(element) === srcSelectedAudio.id) {
            element.querySelector('input').checked = true
        }
    })

}

function btnDefinir(e, dispatch) {
    defaultAction(e, dispatch)
    const list = document.querySelectorAll('.list-element')
    list.forEach((element) => {
        const input = element.querySelector('input')
        if (input.checked) {
            const sound = searchSound(+input.value).sound
            dispatch(setTheSound(sound))
        }
    })
}

const SoundListBanner = () => {
    const { isSoundListActive } = useSelector((state) => state.clock)

    return (
        <div className={`fixed ${!isSoundListActive && "hidden"} inset-0 z-10 animate-fadeIn w-screen h-screen text-slate-200`}>
            <div className="fixed transform -translate-x-1/2 -translate-y-1/2 bg-slate-950 left-1/2 top-1/2 rounded-xl">
                <div className='grid gap-4 p-4 md:p-6'>
                    <h2 className="text-lg tracking-wide text-center rounded md:text-2xl">Sonido de Fondo</h2>
                    <form className="grid gap-4">
                        <div className="flex p-1 mx-auto border rounded border-slate-700 w-fit" >
                            <label htmlFor="volumen" className="p-1 text-sm tracking-wide md:text-base" >Volumen</label>
                            {/* <input type="range" id="volumen" name="volumen" min="0" max="100" defaultValue="100" className="w-1/2" /> */}
                            <input type="range" id="volumen" min="0" max="100" defaultValue="50" className="PB-range-slider "></input>
                        </div>
                        <ul className="grid justify-around gap-5">
                            {soundList.map((sound) => {
                                return (
                                    <li key={sound.id} className="flex justify-between gap-7 list-element">
                                        <label htmlFor={sound.id} className="text-xs tracking-wide md:text-base">{sound.name}</label>
                                        <input className="input" type="radio" id={sound.id} name="sound" value={sound.id} defaultChecked={sound.id == "0"} />
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="h-0.5 -mx-4  md:-mx-6 bg-slate-700"></div>
                        <div className="flex justify-center gap-3">
                            <SoundBannerBtn text="Determinar" func={btnDefinir} />
                            <SoundBannerBtn text="Salir" func={btnSalir} />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default SoundListBanner