import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name : "Priyansh",
    age: 21
  }
  let myarr = [1,2,3,4,5,6]

  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-2xl w-3xl mb-12'>tailwind test</h1>

    {/* <Card name="vashu" someobj = {myobj} somearr = {myarr}/> */}
    {/* <Card username='vashu' btntext='subscribe'/>
    <Card username='Priyansh'/> */}

    <Card username='vashu' btntxt='visit me'/>
    <Card username='Priyansh'/>

    </>
  ) 
}

export default App
