import React from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'

const  App =() => {
  return (
    <div className = 'App m-5'>
      <TodoInput/>
      <TodoList />
    </div>
  );
}

export default App;
