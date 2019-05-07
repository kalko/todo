import React, { useState } from 'react'

function AddTodo(props) {

  const [id] = useState("")
  const [title, setTitle] = useState("")
  const [complete] = useState("")


  // e = hodnota ktoru zadam do input  
  const onChange = (e) => {
    setTitle(e.target.value)
    // setId(e.target.)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.addTodo({ id: id, title: title, complete: complete })
    setTitle("")
  }

  return (
    <div>
      {/* <form onSubmit={() => props.addTodo(title)} style={{ display: 'flex' }}> */}
      <form onSubmit={onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          style={{ flex: '10', padding: '5px' }}
          placeholder='Add Todo ...'
          value={title}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Submit'
          style={{ flex: '1' }} />
      </form>
    </div >
  )

}

export default AddTodo