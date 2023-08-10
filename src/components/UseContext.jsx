import React, { useContext } from 'react'
import { AppContext } from '../App'

const UseContext = () => {
    const {setVal,value} = useContext(AppContext)
    const submitting = () => {

    }
  return (
    <div>
      <input type="text" onChange={(e)=>{setVal(e.target.value)}} value={value}/>
      <p>{value}</p>
    </div>
  )
}

export default UseContext
