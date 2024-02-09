import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx'
import { Tareas } from './components/Dashboard/Tareas.jsx'
import Completadas from './components/Dashboard/Completadas.jsx'
import { PorHacer } from './components/Dashboard/PorHacer.jsx'
import NewProject from './components/Dashboard/NewProject.jsx'

const router = createBrowserRouter([
  {
    path: "/",
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
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
