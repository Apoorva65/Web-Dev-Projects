import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  const addValue = () =>{
    setCounter(counter>=20 ? 20: counter+1);
  }
  const removeValue = () =>{
    setCounter(counter<=0 ? 0 : counter-1);
  }

  return (
    <>
      <h1>First React Project</h1>
      <h2  id = "add" >Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}


export default App
