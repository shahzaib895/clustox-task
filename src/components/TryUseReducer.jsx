import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type){
        case 'count':
            return { ...state, count: state.count+1 }
    case 'mood':
            return { ...state, toggle: !state.toggle  }
    }
}

const TryUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0 , toggle: true})
    const Submitting = (e) => {
        e.preventDefault()
        console.log('submited times')
        dispatch({type: 'count'})
        dispatch({type: 'mood'})
    }
  return (
    <div>
        {!state.toggle && <h1>'Hi,,, I am happy' 'you clicked {state.count} times'</h1>}
        {state.toggle && <h1>'Hi,,, I am happy' 'you clicked {state.count} times'</h1>}
      <form action="submit" onClick={Submitting}>
        <input type="submit" value="Mood Check" id="" />
      </form>
    </div>
  )
}

export default TryUseReducer
