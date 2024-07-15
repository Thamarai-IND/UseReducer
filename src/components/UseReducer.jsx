import React, { useReducer } from 'react'

const initialState = {
    count: 0,
    showCountFlag: true
}

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {
            ...state,
            count: state.count + 1 
        };
      case 'decrement':
        return {
            ...state,
            count: state.count - 1 
        };
      case 'reset':
        return initialState;
      case 'show':
        return {
            ...state,
            showCountFlag: !state.showCountFlag
        };
      default:
        throw new Error();
    }
} 

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>Use Reducer Hook</h1>
        {
            state.showCountFlag ? <p>Count: {state.count}</p> : null
        }
        
        <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
            <button onClick={() => dispatch({ type: 'increment' })}>Increase Count</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrease Count</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>
            <button onClick={() => dispatch({ type: 'show' })}>Show Count</button>
        </div>
    </div>
  )
}

export default UseReducer