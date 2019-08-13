import React, { useState } from 'react'

function AddTodo(props) {

  const [title, setTitle] = useState('')

  // e = hodnota ktoru zadam do input  
  const onChange = (e) => {
    setTitle(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title) return
    props.addTodo(title)
    setTitle('')
  }

  return (
    <div>
      {/* <form onSubmit={() => props.addTodo(title)} style={{ display: 'flex' }}> */}
      <form onSubmit={onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          style={{ flex: '10', padding: '5px' }}
          placeholder='Add Todo ...'
          value={title}
          onChange={onChange}
        />
      </form>
    </div >
  )

}

export default AddTodo