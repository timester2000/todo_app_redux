import {ADD_TODO, DELETE_TODO, UPDATE_TODO, COMPLATE_TODO} from './actions'
import { todos } from './states'

export let reducer = (state = todos, action) => {
  let newTodos;
  switch(action.type){
    case ADD_TODO:
      newTodos = [...state]
      newTodos.push(action.payload)
      return newTodos
    case DELETE_TODO:
      newTodos = [...state]
      newTodos = newTodos.filter(todo => todo.id != action.payload)
      return newTodos
    case UPDATE_TODO:
      newTodos = [...state]
      let y = action.payload.name
      console.log(y)
      newTodos = newTodos.map(todo => todo.id ===action.payload.id ? {...todo,name:y } : todo)
      return newTodos
    case COMPLATE_TODO:
      newTodos = [...state]
      let complate =! action.payload.complate
      newTodos = newTodos.map(todo => todo.id=== action.payload.id ? {...todo, complate} : todo)
      return newTodos
  }
  return state
}