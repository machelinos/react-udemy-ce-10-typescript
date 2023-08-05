import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const handleAdd = (step: number = 1): void => {
    setCount(count + step)
  }

  return (
    <>
      <h2>Counter</h2>
      <p>Value: {count} </p>
      <br />

      <button
        className="btn btn-primary"
        onClick={() => {
          handleAdd()
        }}
      >
        +1
      </button>

      <button
        className="btn btn-primary ml-2"
        onClick={() => {
          handleAdd(2)
        }}
      >
        +2
      </button>
    </>
  )
}
