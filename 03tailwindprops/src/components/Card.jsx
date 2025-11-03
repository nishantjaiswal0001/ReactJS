import React from 'react'

// function Card() {
//   return (
//     <div className="h-40">
//       <img className="h-full w-full object-cover" src="https://www.quillingtreasures.com/image/cache/catalog/2017/June/14-06%20(9)-600x800.jpg" alt="" />
//     </div>
//   )
// }

// function Card(props) {
//     console.log("props",props)
//     console.log(props.username)
//   return (
//     <div className="h-40">
//       <img className="h-full w-full object-cover" src="https://www.quillingtreasures.com/image/cache/catalog/2017/June/14-06%20(9)-600x800.jpg" alt="" />
//     </div>
//   )
// }

function Card({username,channel}) {
    // console.log("props",props)
    // console.log(props.username)
    console.log(username)
    console.log(channel)
  return (
    <div className="h-40">
      <img className="h-full w-full object-cover" src="https://www.quillingtreasures.com/image/cache/catalog/2017/June/14-06%20(9)-600x800.jpg" alt="" />
    </div>
  )
}

export default Card
