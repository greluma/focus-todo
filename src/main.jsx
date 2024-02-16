// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx'
import { Tareas } from './components/Dashboard/Tareas.jsx'
import Completadas from './components/Dashboard/Completadas.jsx'
import PorHacer from './components/Dashboard/PorHacer.jsx'
import NewProject from './components/Dashboard/NewProject.jsx'
import { addProjectAction } from './features/dashboard/dashboardActions.js'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SpecificProject from './components/Dashboard/SpecificProject.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,

        children: [
          {
            path: "/dashboard/tareas",
            element: <Tareas />,

          },
          {
            path: "/dashboard/completadas",
            element: <Completadas />,
          },
          {
            path: "/dashboard/todo",
            element: <PorHacer />,
          },
          {
            path: "/dashboard/proyectos",
            element: <NewProject />,
            action: addProjectAction
          },
          {
            path: "/dashboard/proyectos/:projectId",
            element: <SpecificProject />,
          },
          {
            path: "/dashboard/:projectId/:taskId",
            element: <div>Edita Tu tarea aquí</div>,
          },
        ],
      },
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
  // </React.StrictMode>,
)
