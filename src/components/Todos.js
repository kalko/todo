import React from 'react'
import TodoItem from './TodoItem';

function Todos({ todos, toogleComplete, deleteTodo }) {

  return (
    todos.map((todo, index) =>
      <TodoItem
        key={index}
        index={index}
        todo={todo}
        toogleComplete={toogleComplete}
        deleteTodo={deleteTodo} />
    )
  );
}

export default Todos;
