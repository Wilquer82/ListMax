import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import News from './pages/form.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/news",
    element: <News whereCalled="news"/>,
  },
  {
    path: "/manut",
    element: <News whereCalled="manut"/>,
  },
  {
    path: "/login",
    element: <News whereCalled="login"/>,
  },
  {
    path: "/register",
    element: <News whereCalled="register"/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
