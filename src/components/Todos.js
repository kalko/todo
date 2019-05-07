import React from 'react';
import TodoItem from './TodoItem';

function Todos(props) {
  return (
    // props.todos.map(todo => <h4>{todo.title}</h4>)
    props.todos.map(todo =>
      <TodoItem key={todo.id}
        todo={todo}
        toogleComplete={props.toogleComplete}
        deleteTodo={props.deleteTodo} />
    )
  );
}

export default Todos;
