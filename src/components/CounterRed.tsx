import { useReducer } from 'react'
import { CounterState, counterReducer } from '../reducers/counterReducer'

const initialState: CounterState = {
  counter: 10,
}

export const CounterRed = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState)
  return (
    <>
      <h3>Counter: {counter}</h3>

      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: 'decrement' })
        }}
      >
        -1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: 'custom', payload: 100 })
        }}
      >
        Custom
      </button>
    </>
  )
}
