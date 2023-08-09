import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TryUseEffect = () => {
    const [data, setData] = useState()
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=> {
    console.log(res)
    setData(res)
})
    },[])
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default TryUseEffect
