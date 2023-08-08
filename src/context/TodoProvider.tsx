import { useReducer } from 'react'
import { TodoState } from '../interfaces/interfaces'
import { TodoContext } from './TodoContext'
import { todoReducer } from '../reducers/todoReducer'

const initialState: TodoState = {
  todosCount: 0,
  todos: [
    {
      id: '1223',
      desc: 'Do something',
      completed: false,
    },
    {
      id: '122231',
      desc: 'Do something else',
      completed: false,
    },
  ],
  todosCompleted: 0,
  todosPending: 0,
}
interface props {
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState)

  const handleToggleTodo = (id: string) => {
    dispatch({ type: 'toggleTodo', payload: { id } })
  }
  return (
    <TodoContext.Provider value={{ todoState, handleToggleTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
