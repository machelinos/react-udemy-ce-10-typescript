import { createContext } from 'react'
import { TodoState } from '../interfaces/interfaces'

export interface TodoContextProps {
  todoState: TodoState
  handleToggleTodo: (id: string) => void
}

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps,
)
