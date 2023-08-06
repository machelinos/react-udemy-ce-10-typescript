import { useState } from 'react'
import { Timer } from './Timer'

export const TimerFather = () => {
  const [milliseconds, setMilliseconds] = useState<number>(1000)

  const handleSetMs = (ms: number): void => {
    setMilliseconds(ms)
  }

  return (
    <>
      Timer milliseconds {1000} <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          handleSetMs(1000)
        }}
      >
        1000 ms
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleSetMs(2000)
        }}
      >
        2000 ms
      </button>
      <Timer milliseconds={milliseconds} />
    </>
  )
}
