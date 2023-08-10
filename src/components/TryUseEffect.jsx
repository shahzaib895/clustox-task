import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const TryUseEffect = () => {
    const [data, setData] = useState()
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=> {
    setData(res)
})
    },[])
    console.log('data', data)
  return (
    <div>
      
    </div>
  )
}

export default TryUseEffect
