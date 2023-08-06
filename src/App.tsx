import { Counter } from './components/Counter'
import { TimerFather } from './components/TimerFather'
import { User } from './components/User'

function App() {
  return (
    <>
      <h1>React + Typescript</h1>

      <h2>UseState</h2>
      <hr />
      <Counter />
      <User />

      <h2 className="mt-5">UseEffect</h2>
      <hr />

      <TimerFather />
    </>
  )
}

export default App
