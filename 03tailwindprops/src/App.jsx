import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myarr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-600 text-black p-5 rounded-2xl'>Tailwind Test</h1>
      <Card channel="hihello" myobj={myarr} username="nishant"/>
      <Card username="aakash" channel="humhike"/>
    </>
  )
}

export default App
