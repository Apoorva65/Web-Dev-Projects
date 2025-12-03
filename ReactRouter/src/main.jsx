import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

const routerr = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [{
      path : '',
      element : <Home />
    },{
      path : 'about',
      element : <About/>
    },
  {
    path : 'contact',
    element : <Contact />
  }]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routerr} />
</React.StrictMode>
)
