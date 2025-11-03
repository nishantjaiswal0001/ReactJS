import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App,{Hell} from './App.jsx'
import Hello from './hello.jsx'

const name="nishant"

function Myapp(){
  return(
    <div>My name is {name}</div>
  )
}

const ReactElement=React.createElement(
  'a',   //tag
  {href: 'https://google.com',target: '_blank'},    //props(properties)
  'click me to visit google'   //direct text to display on screen   these are in order bydefault first tag then props then text
        
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <Myapp/>
    {/* {ReactElement} */}
    {/* <Hell /> */}
    {/* <Hello/> */}
  </StrictMode>,
)
