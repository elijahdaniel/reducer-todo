export const initialState = [
  {
    item: 'Learn about Javascript',
    completed: false,
    id: 1
  }
]

export const todoReducer = (state, action) => {
  switch (action.type) {
    // if addTodo === action.type
    case 'AddTodo':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]

    // if Toggle === action.type
    case 'Toggle':
      let complete = state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
      return complete

    // if Remove === action.type
    case 'Remove':
      let Subtract = state.filter(item => {
        if (item.completed === true) {
          return !item.completed
        } else {
          return item
        }
      })
      return Subtract

    default:
      return state
  }
}
