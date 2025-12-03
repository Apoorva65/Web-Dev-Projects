import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubLoader } from './components/Github/Github.jsx'

// const routerr = createBrowserRouter([
//   {
//     path : '/',
//     element : <App />,
//     children : [{
//       path : '',
//       element : <Home />
//     },{
//       path : 'about',
//       element : <About/>
//     },
//   {
//     path : 'contact',
//     element : <Contact />
//   }]
//   }
// ])

const routerr = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element = {<Home/>} />
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/user/:userid' element = {<User/>}/>
      <Route 
      loader = {githubLoader}
      path='/github' element = {<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routerr} />
</React.StrictMode>
)
