export interface TodoState {
  todosCount: number
  todos: Todo[]
  todosCompleted: number
  todosPending: number
}

export interface Todo {
  id: string
  desc: string
  completed: boolean
}
