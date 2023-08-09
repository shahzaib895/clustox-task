import React, { useRef } from 'react'

const TryUseRef = () => {

    const inputRef = useRef()
    const ClickMe = () => {
        inputRef.current.value = ""
    }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <input type="submit" value='click me' onClick={ClickMe}/>
    </div>
  )
}

export default TryUseRef
