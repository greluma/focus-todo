import { useSelector } from "react-redux"
import { searchSound, soundList } from "../utils/sounds"
import SoundBannerBtn from "./SoundBannerBtn"
import { setIsSoundListActive, setTheSound } from "../features/clock/clockSlice"


function btnDefaultAction(e, dispatch) {
    e.preventDefault()
    dispatch(setIsSoundListActive())

}
function btnSalir(e, dispatch, theSound) {
    btnDefaultAction(e, dispatch)
    const srcSelectedAudio = soundList.find((sound) => sound.sound == theSound);
    const list = Array.from(document.querySelectorAll('.list-element'))
    list.forEach((element) => {
        if (list.indexOf(element) === srcSelectedAudio.id) {
            element.querySelector('input').checked = true
        }
    })

}

function btnDefinir(e, dispatch) {
    btnDefaultAction(e, dispatch)
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
                        <div className="flex justify-around gap-4 mx-auto w-fit" >
                            <label htmlFor="volumen" className="text-sm tracking-wide md:text-base" >Volumen</label>
                            <input type="range" id="volumen" name="volumen" defaultValue="100" />
                        </div>
                        <ul className="grid justify-around gap-3">
                            {soundList.map((sound) => {
                                return (
                                    <li key={sound.id} className="flex justify-between gap-7 list-element">
                                        <label htmlFor={sound.id} className="text-xs tracking-wide md:text-base">{sound.name}</label>
                                        <input className="text-end" type="radio" id={sound.id} name="sound" value={sound.id} defaultChecked={sound.id == "0"} />
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