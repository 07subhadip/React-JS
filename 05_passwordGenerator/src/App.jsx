import { useState,useCallback ,useEffect,useRef} from 'react'


function App() {
  const [length,setLength] = useState(6)
  const [numberAllow,setNumberAllow] = useState(false)
  const [character,setCharacter]  =useState(false)
  const [password,setPassword] = useState("")


  //useRef hook

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow) str +="0123456789"
    if(character) str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    for(let i=1; i<= length;i++){
      let char = Math.floor(Math.random()* str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllow,character,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,character,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-6 my-8 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <h1 className='text-white text-center mb-4 font-semibold text-lg'>Password Generator</h1>
        <div className='flex items-center justify-between shadow-md overflow-hidden mb-4 rounded-xl bg-white bg-opacity-10'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3  text-white bg-[rgba(255,255,255,0.2)] placeholder-white'
            placeholder='Generated Password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-r-xl transition-colors duration-300 ease-in-out'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 mt-4'>
          <div className="flex items-center gap-x-1">
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Length:</label>
            <input 
              type="range"
              min={6}
              max={200}
              value={length}
              className='cursor-pointer w-full h-2 mb-6 mt-6 bg-gray-100 rounded-lg appearance-none dark:bg-gray-400 scroll-smooth'
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
}

export default App;
