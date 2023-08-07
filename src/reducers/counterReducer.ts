export type ActionType =
  | {
      type: 'add' | 'decrement'
    }
  | {
      type: 'custom'
      payload: number
    }

export interface CounterState {
  counter: number
}

export const counterReducer = (state: CounterState, action: ActionType) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      }
    case 'custom':
      return {
        ...state,
        counter: action.payload,
      }

    default:
      return state
  }
}
