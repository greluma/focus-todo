import { ToastContainer } from "react-toastify";
import Home from "./pages/Home"
import 'react-toastify/dist/ReactToastify.css';


// Esta pagina déjala para organizar las rutas con react-router-dom
const App = () => {
  return (
    <div className="font-mono">
      <Home />
      <ToastContainer />
    </div>
  )
}
export default App


// TODO Instala Tailwind