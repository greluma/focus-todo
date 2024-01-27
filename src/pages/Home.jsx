import Clock from "../components/Clock"

const Home = () => {
    return (
        <div>
            <div>
                <button>Stats</button>
                <button>Select a task</button>
            </div>
            <div>
                <Clock />
                <button>Comenzar a enfocarse</button>
            </div>
            <div>
                <button>pantalla completa</button>
                <button>modo temporizador</button>
                <button>sonido de fondo</button>
            </div>
        </div>
    )
}
export default Home