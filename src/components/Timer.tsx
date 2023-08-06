import { useEffect, useRef, useState } from 'react'

interface TimerArgs {
  milliseconds: number
}

export const Timer = ({ milliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState<number>(0)
  const ref = useRef<number>()

  useEffect(() => {
    ref.current && clearInterval(ref.current)
    ref.current = setInterval(() => {
      setSeconds((sec) => sec + 1)
    }, milliseconds)
  }, [milliseconds])

  return (
    <>
      <h3>Timer: {seconds}</h3>
    </>
  )
}
