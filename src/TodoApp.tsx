import { TodoList } from './components/TodoList'
import { TodoProvider } from './context/TodoProvider'

export const TodoApp = () => {
  return (
    <TodoProvider>
      <h2>Todo App</h2>

      <TodoList />
    </TodoProvider>
  )
}
