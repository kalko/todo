import React from 'react'

export default function Search({ search }) {

  const onChange = (e) => {
    search(e.target.value)
  }

  return (
    <div>
      <input
        type='text'
        style={{ width: '100%' }}
        placeholder='Search ...'
        onChange={onChange}
      />
    </div>

  )
}