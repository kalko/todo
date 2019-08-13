import React from 'react';

function TodoItem(props) {

  const getStyle = (props) => {
    return {
      background: '#f4f4f4',
      padding: '5px',
      borderBottom: '1px #ccc dotted',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    }
  }

  const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
  }

  return (
    <div style={getStyle(props)}>
      <p>
        <input type='checkbox' onChange={() => props.toogleComplete(props.index)} />
        {props.todo.title}
        <button onClick={() => props.deleteTodo(props.index)} style={btnStyle}>x</button>
      </p>
    </div>
  );
}

export default TodoItem;
