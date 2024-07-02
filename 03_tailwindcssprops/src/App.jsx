import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username:"subhadip",
    pass:123
  }

  let newArr = [1,2,3]

  return (
    <>
    <h1 className='text-black p-5 rounded-xl bg-green-600 mb-4'>TailwindCss</h1>
    <Card userName="Subhadip" btnMsg = "Check Out &rarr;"/>
    <Card userName="Anusuya" btnMsg = "Check Me &rarr;"/>

    </>
  )
}

export default App
