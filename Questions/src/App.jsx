import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increment=()=>{
    count=count+1
    setCount(count)
  }
  
  const decrement=()=>{
    count=count-1
    setCount(count)
  }

  return (
    <>
      <h1>The count is: {count}</h1>
      <button onClick={increment}>Add value</button>
      <button onClick={decrement}>Subtract value</button>
    </>
  )
}

export default App
