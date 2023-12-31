import { Counter } from './components/Counter'
import { CounterRed } from './components/CounterRed'
import { Form } from './components/Form'
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

      <h2 className="mt-5">UseReducer</h2>
      <hr />

      <CounterRed />

      <h2 className="mt-5">Custom hooks</h2>
      <hr />

      <Form />
    </>
  )
}

export default App
