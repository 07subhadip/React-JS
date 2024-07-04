import React,{useState} from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
   
    <div className="w-full h-screen duration-200"  
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("red")}}className="outline-none px-4 rounded-full text-white font-bold shadow-lg "
          style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>{setColor("yellow")}}className="outline-none px-4 rounded-full text-black font-bold shadow-lg"
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={()=>{setColor("blue")}} className="outline-none px-4 rounded-full text-white font-bold shadow-lg bg-sky-500 hover:bg-sky-700">Blue</button>
          <button onClick={()=>{setColor("green")}} className="outline-none px-4 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=>{setColor("magenta")}} className="outline-none px-4 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor: "magenta"}}>Magenta</button>
          <button onClick={()=>{setColor("olive")}} className="outline-none px-4 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={()=>{setColor("orange")}} className="outline-none px-4 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={()=>{setColor("black")}} className="outline-none px-4 rounded-full text-white font-bold shadow-lg"
          style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>

      {/* <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 space-x-4">
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor('red')}
        >
          Red
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor('blue')}
        >
          Blue
        </button>
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor('green')}
        >
          Green
        </button>
        <button 
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor('yellow')}
        >
          Yellow
        </button>
        <button 
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor('black')}
        >
          Black
        </button>
      </div> */}
    </div>
   
  )
}

export default App
