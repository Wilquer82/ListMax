import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import News from './pages/form.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Partners from './pages/partners.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css'
import HomePartners from './pages/homePartners.jsx';
import HomeUsers from './pages/homeUsers.jsx';
import HomeEvents from './pages/homeEventos.jsx';
import LookYou from './pages/lookYou.jsx';
import ConfPres from './pages/confPresen.jsx';
import { StyleProvider } from '@ant-design/cssinjs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/previa2024",
    element: <App whereCalled="previa"/>,
  },
  {
    path: "/confirm",
    element: <ConfPres />,
  },
  {
    path: "/homeUsers",
    element: <HomeUsers />,
  },

  {
    path: "/homeEvents",
    element: <HomeEvents />,
  },

  {
    path: "/look",
    element: <LookYou />,
  },
  {
    path: "/news",
    element: <News whereCalled="news" />,
  },
  {
    path: "/manut",
    element: <News whereCalled="manut" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/homePartners",
    element: <HomePartners />,
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
    </StyleProvider>
  </React.StrictMode>,
)
