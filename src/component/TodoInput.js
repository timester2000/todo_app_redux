import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import {v1 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
const TodoInput = () => {
  let [name, setName] = useState()
  let dispatch = useDispatch()
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Todo App</h2>
      <div className='row m-2' >
        <input
          onChange={(e)=>setName(e.target.value)}
          value={name}
          type='text' 
          className='col form_control'/>
        <button 
          onClick={()=>{dispatch(addTodo(
            {
              id: uuid(),
              name: name,
              complate : false,
            }
          ))
          setName('')
          }}
          className='btn btn-info m-2'>Add</button>
      </div>
    </div>
  )
}

export default TodoInput
