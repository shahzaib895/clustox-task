import React, { useState } from 'react'

const TryUseState = () => {
  const [text, setText] = useState('')
  const [output, setOutput] = useState('')
  const [count, setCount] = useState(1)

  const dataSubmit = () => {
    setOutput(text)
    setCount(count+1)
    console.log(count)
  }
  return (
    <div>
      <h1>{output}</h1> {count>1 ? <p>You clicked the button {count} times </p> : ''}
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      <input type="submit" value='click me'  onClick={dataSubmit}/>
    </div>
  )
}

export default TryUseState
