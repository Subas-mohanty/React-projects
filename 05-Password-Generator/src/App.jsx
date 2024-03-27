import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { useReducer } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [allowedNum, setAllowedNum] = useState(false);
  const [allowedChar, setAllowedChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowedNum) characters+="0123456789";
    if(allowedChar) characters += "!@#$%^&*";
    let password = "";
    for(let i =0; i<length; i++){
      let charInd = Math.floor(Math.random() * characters.length);
      password+=characters[charInd];
    }
    setPassword(password);
    // return password;
  }, [length, allowedNum, allowedChar, setPassword]);
  
  // console.log(passwordGenerator(5));

  useEffect(()=>{
    passwordGenerator();
  }, [length, allowedChar, allowedNum, passwordGenerator]);

  // useRef
  const passRef = useRef();
  function copyText(){
    
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 3);

    const pass = passRef.current.value;
    
    console.log(password);
    window.navigator.clipboard.writeText(pass)
  }
  return (
    <>
    <div className='w-full max-w-lg max-h-64 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 items-center' >
        <input
         type="text"
         value={password}
         readOnly
         className='outline-none w-full py-1 px-3' 
         placeholder='Password'
         ref={passRef}
         />
         <button onClick={copyText} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={25}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> setLength(e.target.value)}
          />
          <label> Length : {length} </label>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            onChange={()=> setAllowedNum((prev)=> !prev)}
            />
            <label>Number</label>
          </div>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            onChange={()=> setAllowedChar((prev)=> !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
