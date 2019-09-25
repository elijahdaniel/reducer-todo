import React, { useState, useReducer } from 'react'

// passed through reducer function: AddTodo, Toggle, Remove
import { initialState, todoReducer } from '../reducers/todoReducer'

const Todo = () => {
  // state for new task entered
  const [task, setTask] = useState('')
  console.log(task)

  // deconstruction of initial state and reducer function
  const [state, dispatch] = useReducer(todoReducer, initialState)
  console.log(state)

  // handle changes for input event onChange
  const handleChanges = e => {
    setTask(e.target.value)
  }

  return (
    <>
      <>
        <div className='container'>
          <h1>REDUCER TODO</h1>

          <input
            type='text'
            value={task}
            onChange={handleChanges}
            placeholder='Add New Task'
          />
          <button onClick={() => dispatch({ type: 'AddTodo', payload: task })}>
            Add
          </button>

          <button onClick={() => dispatch({ type: 'Remove', payload: task })}>
            Clear Completed
          </button>

          {state.map(state => {
            return (
              <div
                className={state.completed ? 'completed' : ''}
                onClick={() => dispatch({ type: 'Toggle', payload: state.id })}
              >
                <p>{state.item}</p>
              </div>
            )
          })}
        </div>
      </>
    </>
  )
}

export default Todo
