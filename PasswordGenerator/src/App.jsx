import { useState } from 'react'
import './App.css'

function App() {

  let [length,setLength] = useState(8);

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
