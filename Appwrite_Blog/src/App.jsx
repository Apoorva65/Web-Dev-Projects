import conf from './conf/conf'
import './App.css'
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authServicee from './appwrite/auth'
import { login,logout } from './store/authSlice'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authServicee.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>{setLoading(false)})
  },[])

  return loading ? (null) : (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
