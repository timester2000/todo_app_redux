import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo, complateTodo } from '../redux/actions'

const TodoItem = ({ todo }) => {
  const [edit,setedit] = useState(false)
  const [name,setName] = useState(todo.name)
  let dispatch = useDispatch()
  return (
    <div className = 'row mx-3 align-items-center'>
      <div className='col'>
      {edit? 
        <input type='text' 
        className='form-control' 
        value={name}
        onChange={
          (e) => setName(e.target.value)
        }
        />
        :
        <div>
        {
          todo.complate?
          <del> {todo.name}</del>
        :
        <h4>{todo.name}</h4>
        }
        </div>
        }
      </div>
      <button
        onClick={()=>{
          dispatch(updateTodo(
            {
              ...todo,
              name: name
            }
          ))
          if(edit){
            setName(todo.name)
          }
          setedit(!edit)
        }}
        className='btn btn-primary m-2'>
        {edit ? "Update" : "Edit"}
      </button>
      <button
        onClick={()=>dispatch(deleteTodo(todo.id))}
        className='btn btn-danger m-2'>
        Delete
      </button>
      <button
        onClick={()=>dispatch(complateTodo(todo))}
        className='btn btn-success m-2'>
        complate
      </button>
    </div>
  )
}

export default TodoItem
