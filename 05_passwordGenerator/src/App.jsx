// import { useState,useCallback } from 'react'


// function App() {
//   const [length,setLength] = useState(8)
//   const [numberAllow,setNumberAllow] = useState(false)
//   const [character,setCharater]  =useState(false)
//   const [password,setPassword] = useState("")

//   const passwordGenerator = useCallback(()=>{
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if (numberAllow) str +="0123456789"
//     if(character) str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

//     for(let i=1; i<= password.length;i++){
//       let char = Math.floor(Math.random()* str.length+1)
//       pass = str.charAt(char)
//     }

//     setPassword(pass)
//   },[length,numberAllow,character,setPassword])
  
//   return (
//     // <>
//     //   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-black">
//     //     <h1 className='text-white text-center mb-2 font-semibold text-lg pt-2'>Password Generator</h1>
//     //     <div className='flex shadow overflow-hidden mb-4 pb-9 rounded-xl'>
//     //       <input type="text"
//     //       value={password}
//     //       className='outline-none w-full py-1 px-3 rounded-xl'
//     //       placeholder='password'
//     //       readOnly
//     //       />
//     //     <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'>copy</button>
//     //     </div>
//     //   </div>
//     // </>

// <>
//   <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-6 my-8 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
//     <h1 className='text-white text-center mb-4 font-semibold text-lg'>Password Generator</h1>
//     <div className='flex items-center justify-between shadow-md overflow-hidden mb-4 rounded-xl bg-white bg-opacity-10'>
//       <input
//         type="text"
//         value={password}
//         className='outline-none w-full py-2 px-3 bg-transparent text-white placeholder-white'
//         placeholder='Generated Password'
//         readOnly
//       />
//       <button className='outline-none bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-r-xl transition-colors duration-300 ease-in-out'>
//         Copy
//       </button>
//     </div>
//     {/* <div className='flex text-sm gap-x-2'>
//       <div className="flex items-center gap-x-1">
//         <input type="range"
//         min={6}
//         max={15}
//         value={length}
//         className='cursor-pointer'
//         onChange={(e)=>{setLength(e.target.value)}}
//          />
//          <label >Length{length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//         <input type="checkbox"
//         defaultChecked={numberAllow}
//         id="numberInput"
//         onChange={()=>{
//           setNumberAllow((prev)=>(!prev))
//         }}
//         />
//         <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//         <input type="checkbox"
//         defaultChecked={character}
//         id="characterInput"
//         onChange={(prev)=>(!prev)}
//         />
//         <label htmlFor="characterInput">Character</label>
//       </div>
//     </div> */}
//     <div className='flex text-sm gap-x-2 mt-4'>
//   <div className="flex items-center gap-x-1">
//     <label className="text-white">Length:</label>
//     <input 
//       type="range"
//       min={6}
//       max={15}
//       value={length}
//       className='cursor-pointer appearance-none bg-transparent w-24 h-3 rounded-md overflow-hidden'
//       onChange={(e) => { setLength(e.target.value) }}
//     />
//     <span className="text-white">{length}</span>
//   </div>
//   <div className="flex items-center gap-x-1">
//     <input 
//       type="checkbox"
//       defaultChecked={numberAllow}
//       id="numberInput"
//       onChange={() => { setNumberAllow(prev => !prev) }}
//       className="cursor-pointer appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-700 checked:border-transparent focus:outline-none"
//     />
//     <label htmlFor="numberInput" className="text-white ml-2 cursor-pointer select-none">Numbers</label>
//   </div>
//   <div className="flex items-center gap-x-1">
//     <input 
//       type="checkbox"
//       defaultChecked={character}
//       id="characterInput"
//       onChange={() => { setCharacter(prev => !prev) }}
//       className="cursor-pointer appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-700 checked:border-transparent focus:outline-none"
//     />
//     <label htmlFor="characterInput" className="text-white ml-2 cursor-pointer select-none">Characters</label>
//   </div>
// </div>

//   </div>
// </>

//   )
// }

// export default App


import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [numberAllow, setNumberAllow] = useState(true);
  const [character, setCharacter] = useState(true);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-6 my-8 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <h1 className='text-white text-center mb-4 font-semibold text-lg'>Password Generator</h1>
        <div className='flex items-center justify-between shadow-md overflow-hidden mb-4 rounded-xl bg-white bg-opacity-10'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3 bg-transparent text-white placeholder-white'
            placeholder='Generated Password'
            readOnly
          />
          <button className='outline-none bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-r-xl transition-colors duration-300 ease-in-out'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 mt-4'>
          <div className="flex items-center gap-x-1">
            <label className="text-white">Length:</label>
            <input 
              type="range"
              min={6}
              max={15}
              value={length}
              className='cursor-pointer appearance-none bg-transparent w-24 h-3 rounded-md overflow-hidden transition-all duration-300 ease-in-out'
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-white transition-all duration-300 ease-in-out">{length}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              checked={numberAllow}
              id="numberInput"
              onChange={() => setNumberAllow(prev => !prev)}
              className="cursor-pointer appearance-none h-5 w-5 border border-gray-300 rounded-md transition-colors duration-300 ease-in-out"
            />
            <label htmlFor="numberInput" className="text-white ml-2 cursor-pointer select-none">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              checked={character}
              id="characterInput"
              onChange={() => setCharacter(prev => !prev)}
              className="cursor-pointer appearance-none h-5 w-5 border border-gray-300 rounded-md transition-colors duration-300 ease-in-out"
            />
            <label htmlFor="characterInput" className="text-white ml-2 cursor-pointer select-none">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
