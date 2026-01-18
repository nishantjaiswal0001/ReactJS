import { useState,useEffect } from "react"
// useState → used to create state variables
// useEffect → used for side effects (API calls, timers, etc.)
function App() {  //This is a React Functional Component,Must start with a capital letter,It returns JSX (UI)
  let [counter,setCounter]=useState(15)
  // let counter=15
  const addvalue=()=>{
    counter=(counter<20)?counter+1:counter;
    setCounter(counter)
    console.log("clicked",counter)
  }
  const subvalue=()=>{
    counter=(counter>0)?counter-1:counter;
    setCounter(counter)
    console.log("clicked",counter)
  }
  return (
    <>
      {/* <div style={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          height: "100vh"
        }
      }>
        <h1 style={{color: "red"}}>Nishant</h1>
      </div> */}
      <h1>Counter value: {counter}</h1>
      <button onClick={addvalue}>Add value</button>
      <button onClick={addvalue}>Footer</button>
      <button onClick={subvalue}>Subtract value</button>
    </>
  )
}

export default App
