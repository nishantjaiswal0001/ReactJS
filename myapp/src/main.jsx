import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App,{Hell} from './App.jsx'
import Hello from './hello.jsx'


function Myapp(){
  return(
    <div>MY app</div>
  )
}

const reactElement=React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google'
        
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Myapp/> */}
    <reactElement/>
    {/* <Hell /> */}
    {/* <Hello/> */}
  </StrictMode>,
)
