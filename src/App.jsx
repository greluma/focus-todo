import { ToastContainer } from "react-toastify";
import Home from "./pages/Home"
import 'react-toastify/dist/ReactToastify.css';


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