import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './Pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Usuario } from './Pages/Usuario.jsx';
import { Contato } from './Pages/Contato.jsx';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/usuario",
    element: <Usuario/>,
  },
  {
    path: "/contato",
    element: <Contato/>,
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
