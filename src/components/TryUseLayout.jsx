import React, { useEffect, useLayoutEffect } from 'react'
import UseContext from './UseContext'

const TryUseLayout = () => {
let mood = 'happy'
    useLayoutEffect(()=>{
console.log(mood)
    })
    useEffect(()=>{
        mood= 'sad'
        console.log(mood)      
    })


    
    return (
    <div>
      <h1>useLayout Effect</h1>
      <p>{mood}</p>
      <UseContext></UseContext>
    </div>
  )
}

export default TryUseLayout
