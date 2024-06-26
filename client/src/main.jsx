import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import Hero from './Components/Hero.jsx'
import SignUp from './Components/SignUp.jsx'
import Login from './Components/Login.jsx'
import Community from './Components/Community.jsx';
import Education from './Components/Education.jsx';
import User from './Components/User.jsx';
import NearestDoctors from './Components/Nearest';
import Navbar from './Components/Ui/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/near-me",
    element: <NearestDoctors />
  },
  {
    path: "/community",
    element: <Community />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position='bottom-right' />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
