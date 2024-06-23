import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(0)
  // let counter=15;

  function addOne(){
    console.log("clicked",counter);
    counter+=1;
    if(counter<0){
      counter = 0;
    }else{
      setCounter(counter);
    }
  }

  function subOne(){
    counter-=1;
    if(counter<0){
      counter=0
    }else{
      setCounter(counter);
    }
  }

  return (
    <>
     <h1>Subhadip Hensh</h1>
     <h2>Counter : {counter}</h2>
     <button onClick={addOne}>Add</button>
     <br />
     <br />
     <button onClick={subOne}>Remove</button>
    </>
  )
}

export default App
