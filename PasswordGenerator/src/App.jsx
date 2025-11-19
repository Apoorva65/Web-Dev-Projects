import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {

  let [len,setLength] = useState(8);
  const [num,setNum] = useState(false);
  const [char,setChar] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num){
      str += "0123456789"
    }
    if(char){
      str += "!@#$%^&*-_+=[]{}~`"
    }

    for(let i=0;i<len;i++){
      let chr = Math.floor(Math.random()*str.length);
      pass += str.charAt(chr);
    }

    setPassword(pass);

  },[len,num,char,setPassword])

  const copyClip = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,len);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[len,num,char,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-amber-50"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button 
        onClick={copyClip}
        className='bg-blue-600 p-2 text-white'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={len}
         className='cursor-pointer'
         onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {len}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={()=>{setNum((prev)=>!prev)}}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={()=>{setChar((prev)=>!prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    
  </div>
    </>
  )
}

export default App
