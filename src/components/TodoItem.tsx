import { TodoContext } from '../context/TodoContext'
import { Todo } from '../interfaces/interfaces'
import { useContext } from 'react'

interface TodoProps {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoProps) => {
  const { handleToggleTodo } = useContext(TodoContext)
  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
      onDoubleClick={() => {
        handleToggleTodo(todo.id)
      }}
    >
      {todo.desc}
    </li>
  )
}
